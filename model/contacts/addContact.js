const { nanoid } = require("nanoid");
const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

const addContact = async ({ name, phone, email }) => {
  const contactsList = await listContacts();
  const id = nanoid();

  const newContact = { id, name, phone, email };

  const newProducts = [...contactsList, newContact];

  await updateContacts(newProducts);
  return newContact;
};
module.exports = addContact;
