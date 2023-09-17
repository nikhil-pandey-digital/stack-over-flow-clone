import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  about: { type: String },
  tags: { type: [String] },
  joinedOn: { type: Date, default: Date.now },
  loginHistory:[
    {
      browser: String,
      os: String,
      platform: String,
      ipAddress: String,
      timeStamp: Date
    }
  ]
});

export default mongoose.model("User", userSchema);
