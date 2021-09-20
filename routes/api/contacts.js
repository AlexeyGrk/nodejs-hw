const express = require("express");

const router = express.Router();
const contactsOperations = require("../../model");
const { contactsSchema } = require("../../schemas/");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts();

    res.json({
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
  try {
    const { contactId } = req.params;
    const contact = await contactsOperations.getContactById(contactId);
    if (!contact) {
      const error = new Error(`Contact with id ${contactId} not found`);
      error.status = 404;
      throw error;
    }
    res.status(200).json({
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
  try {
    contactsSchema
      .validate(req.body)
      .then(async (valid) => {
        if (valid) {
          const newContacts = await contactsOperations.addContact(req.body);
          res.status(201).json({
            status: "success",
            code: 201,
            message: "New contact add",
            newContacts,
          });
        }
      })
      .catch(function (err) {
        // const errorValidatin = new Error(err.errors); // Как выбросить ошибку которую тут ловит catch в универсальный обработчик ошибок в app.js? А не просто в консоль?
        // errorValidatin.status = 401;
        // return errorValidatin;
        res.status(400).json({
          status: "error",
          code: 400,
          message: err.errors,
        });
      });
  } catch (e) {
    next(e);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const deletedContact = await contactsOperations.removeContact(contactId);
    if (!deletedContact) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found contact",
      });
    } else {
      res.json({
        status: "success",
        code: 204,
        message: deletedContact,
      });
    }
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;

    contactsSchema
      .validate(req.body)
      .then(async (valid) => {
        if (valid) {
          const updateById = await contactsOperations.updateById(
            contactId,
            req.body
          );

          if (!updateById) {
            res.status(404).json({
              status: "error",
              code: 404,
              message: "Not found contact",
            });
          } else {
            res.status(201).json({
              status: "success",
              code: 201,
              message: "Changes add",
              updateById,
            });
          }
        }
      })
      .catch((err) => {
        res.status(400).json({
          status: "error",
          code: 400,
          message: err.errors,
        });
      });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
