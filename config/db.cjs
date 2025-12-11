const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/';
const dbName = 'VSMKSOLTECH';

let db;

const connectDB = async () => {
  if (db) return db;
  try {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log('MongoDB connected successfully');
    return db;
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
