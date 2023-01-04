import mongoose from "mongoose";

const usersSchema = mongoose.Schema({
  name: String,
  role: String,
  username: String,
  password: String,
});

export default mongoose.model("Users", usersSchema);
