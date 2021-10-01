let yup = require("yup");
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
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
});

const User = model("user", userSchema);
module.exports = {
  userYupSchema,
  User,
};
