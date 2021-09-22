const contactsOperations = require("../../model/");
const { sendSuccessRes } = require("../../utils/");
const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const deletedContact = await contactsOperations.removeContact(contactId);
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
