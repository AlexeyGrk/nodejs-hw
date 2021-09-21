const sendSuccessRes = (res, contacts, status = 200) => {
  res.status(status).json({
    status: "success",
    code: status,
    message: "request success",
    contacts,
  });
};
module.exports = sendSuccessRes;
