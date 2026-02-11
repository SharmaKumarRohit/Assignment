const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: 3000 });
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = generateToken(user.id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    const token = generateToken(user.id);
    res.status(201).json({ email, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { loginUser, signupUser };
