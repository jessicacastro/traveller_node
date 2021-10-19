import { Request, Response } from 'express';
import { ListAccomodationsService } from '../services/ListAccomodationsService';

class ListAccomodationsController {
  async handle(request: Request, response: Response) {
    const listAccomodationsService = new ListAccomodationsService();

    try {
      const accomodations = await listAccomodationsService.execute();
      
      return response.json(accomodations);
    } catch (error) {
      return response.json({ error: error.message });
    }

  }
}

export { ListAccomodationsController }