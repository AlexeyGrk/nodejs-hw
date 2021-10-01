const { HTTPcode } = require("../utils/constants");
const validation = (schema) => {
  return async (req, res, next) => {
    schema
      .validate(req.body)
      .then((valid) => {
        if (valid) {
          next();
        }
      })
      .catch(function (err) {
        res.status(HTTPcode.BAD_REQUEST).json({
          status: "error",
          code: HTTPcode.BAD_REQUEST,
          message: {
            type: err.name,
            error: err.errors,
          },
        });
      });
  };
};
module.exports = validation;
