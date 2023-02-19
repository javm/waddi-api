module.exports = (req, res, next) => {
  if (req.user.role !== 'creator' && req.user.role !== 'admin') {
    return res.status(401).json({ message: 'Unauthorized.' });
  }
  next();
}