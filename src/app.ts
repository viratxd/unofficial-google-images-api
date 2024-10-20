import notFound from "controllers/notfound";
import express, { Express, json, Request, Response } from "express";
import { createSuccessResponse } from "utils/response";
import router from './router';

const app:Express = express();

app.use(json());

app.use('/api', router)
app.get('/', (_: Request, res: Response) => {
  createSuccessResponse(res, 'Server is up and running.')  
})
app.use('*', notFound)


export default app;