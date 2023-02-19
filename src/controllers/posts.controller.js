const { Post } = require('#models/index');

const get = async (req, res) => {
  const posts = await Post.findAll();
  return res.status(200).json(posts);
}

const post = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({
    title,
    content
  });
  return res.status(201).json(post);
}

module.exports = {
  get,
  post
};