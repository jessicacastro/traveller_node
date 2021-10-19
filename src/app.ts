import express from 'express';
import * as dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/', router);

app.listen(4000, () => console.log("Listening on PORT 4000"));