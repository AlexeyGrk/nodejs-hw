const { nanoid } = require("nanoid");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const addContact = async ({ name, phone, email }) => {
  const contactsList = await listContacts();
  const id = nanoid();

  const newContact = { id, name, phone, email };
  contactsList.push(newContact);

  await updateContacts(contactsList);
  return newContact;
};
module.exports = addContact;
