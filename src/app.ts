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
app.get('/gold', async (req: Request, res: Response) => {
  try {
    const response = await fetch(`http://bcast.classicbullion.com:7767/VOTSBroadcastStreaming/Services/xml/GetLiveRateByTemplateID/classic`).then(res => res.text())
    return res.json(response)
  } catch (err) {
    return res.json({
      error: JSON.stringify(err)
    })
  }
})
app.use('*', notFound)


export default app;