const { Post, Review, User } = require('#models/index');

const post = async (req, res) => {
  const postId = req.params.id;
  const { content, rating } = req.body;
  try {
    const postObj = await Post.findByPk(postId);
    if (!postObj) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    const review = await Review.create({
      content,
      rating,
      user_id: req.user.id,
      post_id: postId
    });
    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

const get = async (req, res) => {
  const postId = req.params.id;
  try {
    const postObj = await Post.findByPk(postId);
    if (!postObj) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    const reviews = await Review.findAll({
      where: {
        post_id: postId
      }
    });
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  post,
  get
};