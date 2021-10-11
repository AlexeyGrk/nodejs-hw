const getContactById = require("./getContactById");
const listContacts = require("./listContacts");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const updateById = require("./updateById");
const updateFavoriteStatus = require("./updateFavoriteStatus");
module.exports = {
  getContactById,
  listContacts,
  addContact,
  removeContact,
  updateById,
  updateFavoriteStatus,
};
