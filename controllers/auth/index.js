const login = require("./login");
const register = require("./register");
const verify = require("./verify");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateSubscriptionStatus = require("./updateSubscriptionStatus");
const updateAvatars = require("./updateAvatars");
const reverify = require("./reverefy");

module.exports = {
  login,
  register,
  verify,
  reverify,
  logout,
  currentUser,
  updateSubscriptionStatus,
  updateAvatars,
};
