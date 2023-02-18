const { Post } = require('#models/index');

const get = async (req, res) => {
  const posts = await Post.findAll();
  return res.status(200).json(posts);
}

module.exports = {
  get
};