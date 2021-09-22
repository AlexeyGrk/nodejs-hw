const contactsOperations = require("../../model/");
const { sendSuccessRes } = require("../../utils/");
const addContact = async (req, res) => {
  const newContacts = await contactsOperations.addContact(req.body);
  sendSuccessRes(res, newContacts, 201);
};
module.exports = addContact;
