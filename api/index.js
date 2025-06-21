// api/index.js
import 'dotenv/config';
import serverless from 'serverless-http';
import mongoose from 'mongoose';
import express from 'express';

const app = express();
app.use(express.json());
app.get('/', (req, res) => res.send('Serverless API working'));

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGODB_URI);
  isConnected = true;
};

const handler = async (req, res) => {
  await connectDB();
  return app(req, res);
};

export default serverless(handler);
