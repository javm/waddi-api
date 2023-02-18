const Joi = require('joi');

module.exports = {
  register: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    role: Joi.string().default('reader')
  }),
  login: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })
}