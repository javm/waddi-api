const { Post } = require('#models/index');
const { PostLog } = require('#models/index');

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
  const postLog = await PostLog.create({
    user_id: req.user.id, post_id: post.id,
    action: 'create'
  });
  return res.status(201).json({post: post, postLog: postLog});
}

module.exports = {
  get,
  post
};