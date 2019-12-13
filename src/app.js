import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(routes);

export default app;
