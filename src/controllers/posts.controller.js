
const {Op} = require('sequelize');
const moment = require('moment');
const { Post } = require('#models/index');
const { PostLog } = require('#models/index');

const get = async (req, res) => {
  const {start_date, end_date} = req.query;
  const queryObj = {
    order: [['created_at', 'DESC']]
  };
  if (start_date && end_date) {
    queryObj.where = {
      created_at: {
        [Op.between]: [new Date(start_date), new Date(end_date)]
      }
    }
  }
  const posts = await Post.findAll(queryObj);
  const postsTagged = posts.map(post => {
    const createdAt = moment(post.created_at).format('YYYY-MM-DD')
    if(createdAt > moment().add(1, 'week').format('YYYY-MM-DD')) {
      return {...post.dataValues, tag: 'older-than-a-week'};
    }
    return post;
  });
  return res.status(200).json(postsTagged);
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