const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { protect } = require('../middleware/authMiddleware.cjs'); // Assuming a general protect middleware

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

// Admin login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Add console.log for received credentials
    console.log('Attempting admin login with:', { email, password });

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    try {
        // Hardcoded admin credentials for demonstration purposes
        if (email === 'vsmk@soltech.org' && password === '123456') {
            const user = {
                id: 'hardcodedAdminId', // A placeholder ID
                email: 'admin@example.com',
                role: 'admin'
            };
            const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Admin login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all submissions for admin
router.get('/submissions', (req, res) => { // For now, not protecting this route for simplicity.
  const submissions = readSubmissions();
  res.json(submissions);
});

// Add feedback to a submission
router.post('/feedback', (req, res) => { // For now, not protecting this route for simplicity.
  const { submissionId, feedback } = req.body;
  const submissions = readSubmissions();
  const submissionIndex = submissions.findIndex(s => s.id === submissionId);

  if (submissionIndex === -1) {
    return res.status(404).json({ message: 'Submission not found' });
  }

  submissions[submissionIndex].feedback = feedback;
  writeSubmissions(submissions);

  res.json({ message: 'Feedback submitted successfully' });
});

module.exports = router;
