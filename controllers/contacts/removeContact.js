const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await Contact.findByIdAndDelete(contactId);
  if (!deletedContact) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: "Not found contact",
    });
  } else {
    sendSuccessRes(res, deletedContact, 200);
  }
};
module.exports = removeContact;
