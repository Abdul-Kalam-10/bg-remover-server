// server/server.js
import 'dotenv/config';
import connectDB from './configs/mongodb.js';
import app from './app.js';

const PORT = process.env.PORT || 5000;

const start = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
};

start();
