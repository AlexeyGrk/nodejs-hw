const getContactById = require("./contacts/getContactById");
const listContacts = require("./contacts/listContacts");
const addContact = require("./contacts/addContact");
const removeContact = require("./contacts/removeContact");
const updateById = require("./contacts/updateById");
const updateFavoriteStatus = require("./contacts/updateFavoriteStatus");
module.exports = {
  getContactById,
  listContacts,
  addContact,
  removeContact,
  updateById,
  updateFavoriteStatus,
};
