const getContactById = require("./contacts/getContactById");
const listContacts = require("./contacts/listContacts");
const removeContact = require("./contacts/removeContact");
const addContact = require("./contacts/addContact");
const updateContacts = require("./contacts/updateContacts");
const updateById = require("./contacts/updateById");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContacts,
  updateById,
};
