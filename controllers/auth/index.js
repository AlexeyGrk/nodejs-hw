const login = require("./login");
const register = require("./register");
const logout = require("./logout");
const currentUser = require("./currentUser");
const updateSubscriptionStatus = require("./updateSubscriptionStatus");

module.exports = {
  login,
  register,
  logout,
  currentUser,
  updateSubscriptionStatus,
};
