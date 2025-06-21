// server/app.js
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// Add your routes
app.get('/', (req, res) => res.send('API Working...'));

export default app;
