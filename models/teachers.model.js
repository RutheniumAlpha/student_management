import mongoose from "mongoose";


const teachersSchema = mongoose.Schema({
    'name': String,
    'class': Number,
    'division': String,
    'phone': Number,
});

export default mongoose.model('Teachers', teachersSchema);