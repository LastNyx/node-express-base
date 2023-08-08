import express, {Request, Response} from 'express';
import {loggerMiddleware} from "@lib/middleware/logger.middleware";
import bodyParser from "body-parser";

require('dotenv').config();

/**
 * Express App Instance
 */
const app = express();
app.use(bodyParser.json());
app.use(loggerMiddleware)

/**
 * Init Hello World
 */
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello World!',
  });
});

app.post('/', (req: Request, res: Response) => {
  res.send(req.body)
});

/**
 * Start the server
 */
app.listen(process.env.APP_PORT, () => {
  console.log(`Application started on port ${process.env.APP_PORT}!`);
});
