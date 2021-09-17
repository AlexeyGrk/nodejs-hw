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
    res.json({
      status: "success",
      code: 200,
      message: "request success",
      contact,
    });
  } catch (e) {
    next(e);
  }
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.patch("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
