import express, { Request, Response } from 'express';

/**
 * Express App Instance
 */
const app = express();

/**
 * Init Hello World
 */
app.get('/', (req: Request, res: Response) => {
  res.send({
    message: 'Hello World!',
  });
});

/**
 * Start the server
 */
app.listen(3000, () => {
  console.log('Application started on port 3000!');
});
