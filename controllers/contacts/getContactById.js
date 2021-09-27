const { Contact } = require("../../models/");
const { sendSuccessRes } = require("../../utils/");
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(
    contactId,
    "_id name phone email favorite"
  );
  if (!contact) {
    const error = new Error(`Contact with id ${contactId} not found`);
    error.status = 404;
    throw error;
  }
  sendSuccessRes(res, contact);
};
module.exports = getContactById;
