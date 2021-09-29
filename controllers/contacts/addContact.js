const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const addContact = async (req, res) => {
  const newContacts = await Contact.create(req.body);
  sendSuccessRes(res, newContacts, 201);
};
module.exports = addContact;
