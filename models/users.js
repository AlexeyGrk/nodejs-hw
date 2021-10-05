let yup = require("yup");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
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
userSchema.methods.createToken = function () {
  const payload = {
    _id: this._id,
  };
  return jwt.sign(payload, SECRET_KEY);
};
let userYupSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  subscription: yup.string(),
});
let userSubscriptionUpdateSchema = yup.object().shape({
  subscription: yup
    .string()
    .matches(/(pro|business)/)
    .required(),
});

const User = model("user", userSchema);
module.exports = {
  userYupSchema,
  userSubscriptionUpdateSchema,
  User,
};
