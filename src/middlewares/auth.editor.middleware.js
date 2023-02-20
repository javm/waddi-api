module.exports = (req, res, next) => {
  if (req.user.role !== 'admin' && req.user.role !== 'editor') {
    return res.status(401).json({ message: 'Unauthorized.' });
  }
  next();
}