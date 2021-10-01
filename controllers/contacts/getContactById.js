const { Contact } = require("../../models/");
const { sendSuccessRes, sendNotFoundRes } = require("../../utils/");
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(
    contactId,
    "_id name phone email favorite"
  ).exec((err, contact) => {
    if (err) {
      return sendNotFoundRes(res, contact);
    }

    sendSuccessRes(res, contact);
  });
};
module.exports = getContactById;
