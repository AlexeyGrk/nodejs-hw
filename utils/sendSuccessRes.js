const { HTTPcode } = require("./constants");
const sendSuccessRes = (res, contacts, status = HTTPcode.OK) => {
  res.status(status).json({
    status: "success",
    code: status,
    message: "request success",
    contacts,
  });
};
module.exports = sendSuccessRes;
