const listContacts = require("./listContacts");
const getContactById = async (contactId) => {
  const contactsList = await listContacts();

  const contact = contactsList.find((item) => item.id === contactId);

  if (!contact) {
    console.log("Not found contact");
    return null;
  }
  return contact;
};
module.exports = getContactById;
