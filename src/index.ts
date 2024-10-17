import 'dotenv/config'
import express, { json } from 'express';
import config from './config';
import router from './router';
import NotFound from './controllers/notfound';

const app = express();
app.use(json());
app.use('/api', router)
app.use('*', NotFound)

app.listen(config.app.port, () => {
  console.log(`Server started, listening on PORT ${config.app.port}`)
})