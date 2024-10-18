import 'dotenv/config'
import express, { json, Response, Request } from 'express';
import config from './config';
import router from './router';
import NotFound from './controllers/notfound';
import { createSuccessResponse } from 'utils/response';
import { logResponse } from 'utils/logging';

const app = express();
app.use(json());
app.use(logResponse)
app.use('/api', router)
app.get('/', (req: Request, res: Response) => {
  createSuccessResponse(res, 'Server is up and running.')  
})
app.use('*', NotFound)

app.listen(config.app.port, () => {
  console.log(`Server started, listening on PORT ${config.app.port}`)
})