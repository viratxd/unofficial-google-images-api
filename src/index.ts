import 'dotenv/config';
import config from './config';
import app from './app';

const server = app.listen(config.app.port, () => {
  console.log(`Server started, listening on PORT ${config.app.port}`);
});
