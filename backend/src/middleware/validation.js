const validationMiddleware = (validationSchema) => async (req, res, next) => {
  const resource = req.body;
  try {
    await validationSchema.validate(resource);
    next();
  } catch (e) {
    res.status(400).json({
      error: e.errors.join(", "),
    });
  }
};

module.exports = validationMiddleware;
