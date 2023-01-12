import mongoose from "mongoose";

const schoolsSchema = mongoose.Schema({
  address: String,
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
  userCollectionID: String,
});

export default mongoose.model("Schools", schoolsSchema);
