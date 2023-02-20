const { PostLog } = require('#models/index');

const get = async (req, res) => {
  const queryObj = {
    order: [['created_at', 'DESC']]
  };

  const postsLogs = await PostLog.findAll(queryObj);
  return res.status(200).json(postsLogs);
};

module.exports = {
  get
};