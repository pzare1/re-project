require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const userRoutes =require('./routes/users')
const authRoutes =require('./routes/auth')
const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(express.json());
app.use(cors());

//add routes

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
