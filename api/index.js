// api/index.js
import 'dotenv/config';
import serverless from 'serverless-http';
import connectDB from '../server/configs/mongodb.js';
import app from '../server/app.js';

let isConnected = false;

const handler = async (req, res) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return app(req, res);
};

export default serverless(handler);
