// api/index.js
import 'dotenv/config';
import serverless from 'serverless-http';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Vercel Serverless API is working');
});

// GLOBAL cache object to persist across Lambda invocations
let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'bg-removal', // Optional: if not included in URI
    });
    isConnected = true;
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    throw err;
  }
}

const handler = async (req, res) => {
  await connectDB(); // Connect once and reuse
  return app(req, res); // Pass the request to Express
};

export default serverless(handler);
