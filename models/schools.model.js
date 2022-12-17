import mongoose from "mongoose";


const schoolsSchema = mongoose.Schema({
    'schoolName': String,
    'schoolAddress': String,
    'contactNumber': Number,
    'email': String,
    'students': {
        required: false,
        type: Array,
        of: String,
        default: []
    }
});

export default mongoose.model('Schools', schoolsSchema);