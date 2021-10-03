const express = require("express");
const router = express.Router();
const { controllerWrapper, validation } = require("../../middlewares/");
const { userYupSchema } = require("../../models/users");

const { auth: ctrl } = require("../../controllers");

router.post(
  "/signup",
  validation(userYupSchema),
  controllerWrapper(ctrl.register)
);
router.post("/login", validation(userYupSchema), controllerWrapper(ctrl.login));
router.get("/logout", controllerWrapper(ctrl.logout));
module.exports = router;
