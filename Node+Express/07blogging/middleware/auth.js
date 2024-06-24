module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader === "Bearer mysecrettoken") {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
};
