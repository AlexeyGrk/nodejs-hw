const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    phone: String,
    email: String,
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: true,
    timestamps: true,
  }
);
