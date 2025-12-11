const express = require('express');
const router = express.Router();
const connectDB = require('../config/db.cjs');

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const db = await connectDB();
    await db.collection('sends').insertOne({ name, email, message, date: new Date() });
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
