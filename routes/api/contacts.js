const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");
const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares/");
const {
  contactYupSchema,
  contactYupUpdateFavoriteSchema,
} = require("../../models/contact");

router.get("/", authenticate, controllerWrapper(ctrl.listContacts));

router.get("/:contactId", authenticate, controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  authenticate,
  validation(contactYupSchema),
  controllerWrapper(ctrl.addContact)
);

router.delete(
  "/:contactId",
  authenticate,
  controllerWrapper(ctrl.removeContact)
);

router.put(
  "/:contactId",
  authenticate,
  validation(contactYupSchema),
  controllerWrapper(ctrl.updateById)
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  validation(contactYupUpdateFavoriteSchema),
  controllerWrapper(ctrl.updateFavoriteStatus)
);

module.exports = router;
