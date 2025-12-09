const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { protect, student } = require('../middleware/authMiddleware.cjs');

const submissionsFilePath = path.join(__dirname, '..', 'submissions.json');

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
