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
        res.status(400).json({
          status: "error",
          code: 400,
          message: {
            type: err.name,
            error: err.errors,
          },
        });
      });
  };
};
module.exports = validation;
