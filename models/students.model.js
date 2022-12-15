import mongoose from "mongoose";


const studentsSchema = mongoose.Schema({
    name: String,
    class: Number,
    division: String,
    yearOfBirth: Number,
    address: String,
    contact: Number
});

export default mongoose.model('Students', studentsSchema);