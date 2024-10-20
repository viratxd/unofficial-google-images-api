import 'dotenv/config'
import config from './config';
import { connect } from 'mongoose';
import app from './app';


let server: any;
const connectDB = (): void => {
  connect(config.db.uri).then(res => {
    console.log('DB Connected...')
    server = app.listen(config.app.port, () => {
      console.log(`Server started, listening on PORT ${config.app.port}`)
    })
  })
}

connectDB()

