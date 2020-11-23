import express from 'express';
import multer from 'multer';
import { celebrate, Joi } from 'celebrate';

import multerConfig from './config/multer';
import pointsPostValidation from './requests/PointsPostValidation';
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', 
  upload.single('image'),
  celebrate({ body: Joi.object().keys(pointsPostValidation)}, {abortEarly: false}),
  pointsController.index
);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);

export default routes;