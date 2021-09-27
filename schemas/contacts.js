let yup = require("yup");

let ContactsSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(5).required(),
});
module.exports = ContactsSchema;
