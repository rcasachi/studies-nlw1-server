import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
      const items = await knex('items').select('*');
    
      const serializedItems = items.map(({id, title, image}) => {
        return {
          id,
          title,
          image_url: `http://192.168.0.109:3333/uploads/${image}`,
        };
      });
    
      return response.json(serializedItems);
    }
}

export default ItemsController;