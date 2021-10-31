const express = require("express");
const router = express.Router();
const upload = require("../../middlewares/upload");

const {
  controllerWrapper,
  validation,
  authenticate,
} = require("../../middlewares/");
const {
  userYupSchema,
  userSubscriptionUpdateSchema,
  userAvatarsUpdateSchema,
} = require("../../models/users");

const { auth: ctrl } = require("../../controllers");

router.post(
  "/signup",
  validation(userYupSchema),
  controllerWrapper(ctrl.register)
);
router.post("/login", validation(userYupSchema), controllerWrapper(ctrl.login));
router.get("/logout", authenticate, controllerWrapper(ctrl.logout));
router.get("/current", authenticate, controllerWrapper(ctrl.currentUser));
router.patch(
  "/",
  authenticate,
  validation(userSubscriptionUpdateSchema),
  controllerWrapper(ctrl.updateSubscriptionStatus)
);

router.patch(
  "/avatars",
  authenticate,
  // validation(userAvatarsUpdateSchema),
  upload.single("avatar"),
  ctrl.updateAvatars
);

module.exports = router;
