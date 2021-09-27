const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const listContacts = async (req, res) => {
  const contacts = await Contact.find({}, "_id name phone email favorite");
  sendSuccessRes(res, contacts);
};
module.exports = listContacts;
