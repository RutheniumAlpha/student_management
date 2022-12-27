import mongoose from "mongoose";

const schoolsSchema = mongoose.Schema({
  schoolName: String,
  schoolAddress: String,
  contactNumber: Number,
  email: String,
  classes: {
    required: false,
    type: Map,
    of: Map,
    default: {},
  },
  username: String,
  password: String,
});

export default mongoose.model("Schools", schoolsSchema);
