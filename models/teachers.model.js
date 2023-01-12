import mongoose from "mongoose";

const teachersSchema = mongoose.Schema({
  class: Number,
  division: String,
  phone: Number,
  username: String,
  password: String,
  userCollectionID: String,
});

export default mongoose.model("Teachers", teachersSchema);
