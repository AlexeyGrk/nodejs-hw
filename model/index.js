const fs = require("fs/promises");
const path = require("path");
const contacts = require("./contacts.json");
const filePath = path.join(__dirname, "./contacts.json");
const listContacts = async () => contacts;

const getContactById = async (contactId) => {
  const contactsList = await listContacts();

  const contact = contactsList.find((item) => item.id === Number(contactId));

  if (!contact) {
    console.log("Not found contact");
    return null;
  }
  return contact;
};

const removeContact = async (contactId) => {
  const contactsList = await listContacts();
  const idx = contactsList.findIndex((item) => item.id === Number(contactId));
  if (idx === -1) {
    console.log("Not found contact");
    return null;
  }
  contactsList.splice(idx, 1);
  await updateContacts(contactsList);
  return "Success remove";
};

const addContact = async ({ id, name, phone, email }) => {
  const contactsList = await listContacts();
  const newContact = { id, name, phone, email };

  const newProducts = [...contactsList, newContact];

  await updateContacts(newProducts);
  return newContact;
};

const updateContacts = async (newContacts) => {
  await fs.writeFile(filePath, JSON.stringify(newContacts));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContacts,
};
