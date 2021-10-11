const { Contact } = require("../../models/");
const { sendSuccessRes, sendNotFoundRes } = require("../../utils/");
const { HTTPcode } = require("../../utils/constants");
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const userId = req.user._id;
  const contacts = await Contact.findOne(
    {
      _id: contactId,
      owner: userId,
    },
    "_id name phone email favorite owner"
  ).exec((err, contact) => {
    if (!contact) {
      return sendNotFoundRes(res);
    }
    if (err) {
      res.status(HTTPcode.BAD_REQUEST).json({
        status: "error",
        name: err.name,
        code: HTTPcode.BAD_REQUEST,
        message: err.message,
      });
    }
    sendSuccessRes(res, contact);
  });
};
module.exports = getContactById;
