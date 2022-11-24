import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import postRoutes from './routes/post.js'
dotenv.config();
const app = express();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Welcome");
});
app.use('/post', postRoutes);
const PORT = process.env.PORT|| 8081;
const CONNECTION_URL ="mongodb+srv://admin_anshuka:XHEnxM3zGl1kKwmU@cluster0.ylauk.mongodb.net/xharktank?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));