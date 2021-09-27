const express = require("express");
const router = express.Router();
const ctrl = require("../../controllers");
const { controllerWrapper, validation } = require("../../middlewares/");
const {
  contactYupSchema,
  contactYupUpdateFavoriteSchema,
} = require("../../models/contact");

router.get("/", controllerWrapper(ctrl.listContacts));

router.get("/:contactId", controllerWrapper(ctrl.getContactById));

router.post(
  "/",
  validation(contactYupSchema),
  controllerWrapper(ctrl.addContact)
);

router.delete("/:contactId", controllerWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(contactYupSchema),
  controllerWrapper(ctrl.updateById)
);
router.patch(
  "/:contactId/favorite",
  validation(contactYupUpdateFavoriteSchema),
  controllerWrapper(ctrl.updateFavoriteStatus)
);

module.exports = router;
