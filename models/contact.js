let yup = require("yup");
const { Schema, model, SchemaTypes } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

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
    owner: {
      type: SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

let contactYupSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(5).required(),
  favorite: yup.boolean(),
});
let contactYupUpdateFavoriteSchema = yup.object().shape({
  favorite: yup.boolean().required(),
});
contactSchema.plugin(mongoosePaginate);
const Contact = model("contact", contactSchema);

module.exports = {
  contactYupSchema,
  contactYupUpdateFavoriteSchema,
  Contact,
};
