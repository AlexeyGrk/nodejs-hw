let yup = require("yup");
const bcrypt = require("bcryptjs");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: [true, "Password is required"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let userYupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  subscription: yup.string(),
});

const User = model("user", userSchema);
module.exports = {
  userYupSchema,
  User,
};
