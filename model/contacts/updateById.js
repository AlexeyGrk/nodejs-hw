const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");
const updateById = async (id, data) => {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const updateContact = { ...contactsList[idx], ...data };
  contactsList[idx] = updateContact;
  await updateContacts(contactsList);
  return updateContact;
};
module.exports = updateById;
