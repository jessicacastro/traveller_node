import { Router, Request, Response } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { ListAccomodationsController } from './controllers/ListAccomodationsController';
import { ListCarsController } from './controllers/ListCarsController';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const listCarsController = new ListCarsController();
const listAccomodationsController = new ListAccomodationsController();

router.get('/', (request: Request, response: Response) => response.json({ message: "API Works!" }))

router.get('list/cars', listCarsController.handle)
router.get('list/accomodations', listAccomodationsController.handle)
router.post('/login', authenticateUserController.handle);

router.use(ensureAuthenticated)

export { router };