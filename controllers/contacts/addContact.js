const { Contact } = require("../../models/");

const { sendSuccessRes } = require("../../utils/");
const { HTTPcode } = require("../../utils/constants");
const addContact = async (req, res) => {
  const userId = req.user._id;
  const newContacts = await Contact.create({
    ...req.body,
    owner: userId,
  });
  sendSuccessRes(res, newContacts, HTTPcode.CREATED);
};
module.exports = addContact;
