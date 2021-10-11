const { HTTPcode } = require("./constants");
const sendNotFoundRes = (res, contacts, status = HTTPcode.NOT_FOUND) => {
  res.status(status).json({
    status: "success",
    code: status,
    message: "Not found contact",
    contacts,
  });
};
module.exports = sendNotFoundRes;
