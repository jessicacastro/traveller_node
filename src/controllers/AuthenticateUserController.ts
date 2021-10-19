import { Request, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserService = new AuthenticateUserService();

    try {
      const user = await authenticateUserService.execute(email, password);
      
      return response.json(user);
    } catch (error) {
      return response.json({ error: error.message });
    }

  }
}

export { AuthenticateUserController }