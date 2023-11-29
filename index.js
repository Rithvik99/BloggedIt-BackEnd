import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import blogRoutes from './routes/blogs.js'; // import routes

const app = express(); // initialize express

app.use(bodyParser.json({ limit: "30mb", extended: true })); // initialize body-parser
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // initialize body-parser

app.use(cors()); // initialize cors

app.use('/blogs', blogRoutes); // use routes

// Connect to MongoDB
const CONNECTION_URL = 'mongodb+srv://rithvikramasani:rithvikramasani@cluster0.sgvjxgt.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`))) // listen to port 5000
    .catch((error) => console.log(error.message));