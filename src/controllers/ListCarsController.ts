import { Request, Response } from 'express';
import { ListCarsService } from '../services/ListCarsService';

class ListCarsController {
  async handle(request: Request, response: Response) {
    const listCarsService = new ListCarsService();

    try {
      const cars = await listCarsService.execute();
      
      return response.json(cars);
    } catch (error) {
      return response.json({ error: error.message });
    }

  }
}

export { ListCarsController }