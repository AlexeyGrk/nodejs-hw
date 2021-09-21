const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers/");
const { controllerWrapper, validation } = require("../../middlewares/");
const { contactsSchema } = require("../../schemas");

router.get("/", controllerWrapper(ctrl.listContacts));

router.get("/:contactId", controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  validation(contactsSchema),
  controllerWrapper(ctrl.addContact)
);

router.delete("/:contactId", controllerWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(contactsSchema),
  controllerWrapper(ctrl.updateById)
);

module.exports = router;
