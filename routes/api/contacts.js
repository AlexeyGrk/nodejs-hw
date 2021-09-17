const express = require("express");
const router = express.Router();
const contactsOperations = require("../../model");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();

    return res.json({
      status: "success",
      code: 200,
      message: "request success",
      contacts,
    });
  } catch (e) {
    next(e);
  }
});

router.get("/:contactId", async (req, res, next) => {
  const contact = await contactsOperations.getContactById(req.params.contactId);
  try {
    if (contact) {
      return res.json({
        status: "success",
        code: 200,
        message: "request success",
        contact,
      });
    }
    return res.json({
      status: "error",
      code: 404,
      message: "Not found contact",
      contact,
    });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newContacts = await contactsOperations.addContact(req.body);
    res.json({
      status: "success",
      code: 201,
      message: "New contact add",
      newContacts,
    });
  } catch (e) {
    next(e);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const deletedContact = await contactsOperations.removeContact(
      req.params.contactId
    );
    res.json({
      status: "success",
      code: 200,
      deletedContact,
    });
  } catch (e) {
    next(e);
  }
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
