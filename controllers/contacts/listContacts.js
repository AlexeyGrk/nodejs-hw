const contactsOperations = require("../../model/");
const { sendSuccessRes } = require("../../utils/");
const listContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  sendSuccessRes(res, contacts);
};
module.exports = listContacts;
