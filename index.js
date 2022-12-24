import express from 'express';
import mongoose from 'mongoose';
var app = express();

import studentsRoute from './routes/students.js';
import schoolsRoute from './routes/schools.js';
import teachersRoute from './routes/teachers.js';

const uri = "mongodb+srv://admin:qPfZM72Hz2hpjUfF@cluster0.vegfhtd.mongodb.net/?retryWrites=true&w=majority"

app.use(express.json());
// Use the students router
app.use('/students', studentsRoute);

// Use the schools route
app.use('/schools', schoolsRoute);

// Use the teachers route
app.use('/teachers', teachersRoute);

const PORT = 3000;

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error(error);
    }
}

connect();

app.get("/", (_req, res) => {
    res.status(200).send("<b> Student Management API </b>")
});

app.listen(PORT, () => console.log("Connected to PORT 3000"));