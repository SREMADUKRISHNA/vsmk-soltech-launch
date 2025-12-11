require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db.cjs');
const studentRoutes = require('./routes/studentRoutes.cjs');
const adminRoutes = require('./routes/adminRoutes.cjs');
const contactRoutes = require('./routes/contactRoutes.cjs');


const app = express();

// Connect to database
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/student', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api', contactRoutes);




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
