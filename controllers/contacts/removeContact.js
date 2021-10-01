const { Contact } = require("../../models/");
const { HTTPcode } = require("../../utils/constants");
const { sendSuccessRes } = require("../../utils/");
const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  if (!deletedContact) {
    res.status(HTTPcode.NOT_FOUND).json({
      status: "error",
      code: HTTPcode.NOT_FOUND,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, deletedContact);
  }
};
module.exports = removeContact;
