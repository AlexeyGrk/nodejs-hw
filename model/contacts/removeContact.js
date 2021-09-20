const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");
const removeContact = async (contactId) => {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((item) => item.id === contactId);
  if (idx === -1) {
    console.log("Not found contact");
    return null;
  }
  contactsList.splice(idx, 1);
  await updateContacts(contactsList);
  return "Contact deleted";
};
module.exports = removeContact;
