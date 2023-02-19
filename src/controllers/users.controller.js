const bcrypt = require('bcrypt');
const { User } = require('#models/index');
const jwtConfig = require('#config/jwt.config');
const cache = require('#utils/cache.util');
const jwt = require('#utils/jwt.util');

const toJSON = (user) => {
  const { id, name, email, role } = user;
  return { id, name, email, role };
};

const register = async (req, res) => {
  const isExist = await User.findOne({
    where: {
      email: req.body.email
    }
  })
  if (isExist) {
    return res.status(400).json({ message: 'Email already exists.' });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role
  });
  return res.status(201).json(toJSON(user));
}

const login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (user) {
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (isMatched) {
      const token = await jwt.createToken({ id: user.id });
      return res.json({
        access_token: token,
        token_type: 'Bearer',
        expires_in: jwtConfig.ttl
      });
    }
  }
  return res.status(400).json({ message: 'Unauthorized' });
}

const getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  return res.json(toJSON(user));
}

const logout = async (req, res) => {
  const token = req.token;
  const now = new Date();
  const expire = new Date(req.user.exp);
  const milliseconds = now.getTime() - expire.getTime();
  /* ----------------------------- BlackList Token ---------------------------- */
  await cache.set(token, token, milliseconds);

  return res.json({ message: 'Logged out successfully' });
}

const get = async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users.map(toJSON));
}

module.exports = {
  register,
  login,
  getUser,
  logout,
  get
}