import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
const app = express();
import notificationRoute from './routes/notificationRoute';
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1', notificationRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

