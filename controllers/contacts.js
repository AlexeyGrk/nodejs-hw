const contactsOperations = require("../model");
const { sendSuccessRes } = require("../utils/");
const listContacts = async (req, res) => {
  const contacts = await contactsOperations.listContacts();
  sendSuccessRes(res, contacts);
};
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsOperations.getContactById(contactId);
  if (!contact) {
    const error = new Error(`Contact with id ${contactId} not found`);
    error.status = 404;
    throw error;
  }
  sendSuccessRes(res, contact);
};
const addContact = async (req, res) => {
  const newContacts = await contactsOperations.addContact(req.body);
  sendSuccessRes(res, newContacts, 201);
};
const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contactsOperations.removeContact(contactId);
  if (!deletedContact) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, deletedContact, 200);
  }
};
const updateById = async (req, res) => {
  const { contactId } = req.params;
  const updateById = await contactsOperations.updateById(contactId, req.body);

  if (!updateById) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, updateById, 200);
  }
};
module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateById,
};
