const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { protect, student } = require('../middleware/authMiddleware.cjs');

const submissionsFilePath = path.join(__dirname, '..', 'submissions.json');
const studentsFilePath = path.join(__dirname, '..', 'students.json');

// Helper function to read submissions
const readSubmissions = () => {
  if (!fs.existsSync(submissionsFilePath)) {
    return [];
  }
  const data = fs.readFileSync(submissionsFilePath);
  return JSON.parse(data);
};

// Helper function to write submissions
const writeSubmissions = (data) => {
  fs.writeFileSync(submissionsFilePath, JSON.stringify(data, null, 2));
};

// Helper function to read students
const readStudents = () => {
  if (!fs.existsSync(studentsFilePath)) {
    return [];
  }
  const data = fs.readFileSync(studentsFilePath);
  return JSON.parse(data);
};

// Helper function to write students
const writeStudents = (data) => {
  fs.writeFileSync(studentsFilePath, JSON.stringify(data, null, 2));
};

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id, role: 'student' }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Register a new student
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Please add all fields' });
  }

  const students = readStudents();
  const studentExists = students.find((s) => s.email === email);

  if (studentExists) {
    return res.status(400).json({ message: 'Student already exists' });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newStudent = {
    id: Date.now(),
    name,
    email,
    password: hashedPassword,
  };

  students.push(newStudent);
  writeStudents(students);

  res.status(201).json({
    _id: newStudent.id,
    name: newStudent.name,
    email: newStudent.email,
    token: generateToken(newStudent.id),
  });
});

// Login a student
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const students = readStudents();
  const student = students.find((s) => s.email === email);

  if (student && (await bcrypt.compare(password, student.password))) {
    res.json({
      _id: student.id,
      name: student.name,
      email: student.email,
      token: generateToken(student.id),
    });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
  }
});

router.get('/submissions', protect, student, (req, res) => {
  const submissions = readSubmissions();
  const userSubmissions = submissions.filter(s => s.userId === req.user.id);
  res.json(userSubmissions);
});

router.post('/coding/submit', protect, student, (req, res) => {
  const { problem, code } = req.body;
  const submissions = readSubmissions();
  const newSubmission = {
    id: Date.now(),
    userId: req.user.id,
    problem,
    code,
    submittedAt: new Date().toISOString(),
    feedback: null,
  };
  submissions.push(newSubmission);
writeSubmissions(submissions);
  res.status(201).json({ message: 'Solution submitted successfully' });
});

router.get('/dashboard', protect, student, (req, res) => {
  res.json({ message: 'Welcome to the Student Dashboard' });
});

router.get('/cybersecurity', protect, student, (req, res) => {
  res.json({ message: 'Cybersecurity Practice content' });
});

router.get('/coding', protect, student, (req, res) => {
  res.json({ message: 'Coding Practice content' });
});

router.get('/labs', protect, student, (req, res) => {
  res.json({ message: 'Live Labs content' });
});

router.get('/courses', protect, student, (req, res) => {
  res.json({ message: 'Live Courses content' });
});

module.exports = router;
