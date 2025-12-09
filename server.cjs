require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes.cjs');
const adminRoutes = require('./routes/adminRoutes.cjs');
const paymentRoutes = require('./routes/paymentRoutes.cjs');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', paymentRoutes);

// Dummy login route for generating a token
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    // In a real application, you would validate the user's credentials against a database
    if (username === 'student' && password === 'password') {
        const user = {
            id: 1,
            username: 'student',
            role: 'student'
        };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else if (username === 'admin' && password === 'password') {
        const user = {
            id: 2,
            username: 'admin',
            role: 'admin'
        };
        const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
