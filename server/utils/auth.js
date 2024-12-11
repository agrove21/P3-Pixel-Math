//auth middleware for graphql
const jwt = require("jsonwebtoken");
const { User } = require("../model");
const jwtSecret = process.env.JWT_SECRET;
const auth = async ({ req }) => {
  const token = req.headers.authorization
    ? req.headers.authorization.split(" ").pop()
    : null;
  if (!token) {
    return null;
  }
  try {
    const { id } = jwt.verify(token, jwtSecret);
    const user = await User.findById(id);
    return { user };
  } catch (err) {
    return null;
  }
};
//generate jwt token
const signToken = (id) => {
  return jwt.sign({ id: id }, jwtSecret, { expiresIn: "24h" });
};
module.exports = { auth, signToken };
