import { Joi } from 'celebrate';

export default {
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  whatsapp: Joi.number().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  city: Joi.string().required(),
  state: Joi.string().required().max(2),
  items: Joi.string().required(),
};