const express = require('express');
const userRouter = require('./routes/user');
const connectMongoDb = require('./connection/connection.js');
const logReqRes = require('./middlewares/index');


const app = express();
const port = 3000;

// connect to MongoDB
connectMongoDb("mongodb+srv://araf:LMJvkODskEaspywO@project.16ma0.mongodb.net/nodejs")
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection failed:', err));

// built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// custom logger middleware
app.use(logReqRes('log.txt'));

// router
app.use('/api/user', userRouter); // 🛑 Double check this line

// start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
