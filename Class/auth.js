module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    if (token == "xxxx") {
      return next();
    }
  }
  res.status(401).send("WHO ARE YOU??");
};
