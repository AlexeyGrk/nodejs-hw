const { Contact } = require("../../models/");

const { sendSuccessRes } = require("../../utils/");
const { HTTPcode } = require("../../utils/constants");
const addContact = async (req, res) => {
  const newContacts = await Contact.create(req.body);
  sendSuccessRes(res, newContacts, HTTPcode.CREATED);
};
module.exports = addContact;
