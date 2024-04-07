import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from './logger';
import routes from './routes';

const app = express();
const port = process.env.PORT || 8000;
const WAIT_BEFORE_SERVER_CLOSE = ['local', 'development'].includes(process.env.NODE_ENV || '') ? 0 : parseInt(process.env.WAIT_BEFORE_SERVER_CLOSE || '10', 10);

if (['local', 'development'].includes(process.env.NODE_ENV || '')) {
  // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
  const devMiddleware = require('./middleware/devMiddleware').default;
  app.use(devMiddleware);
}

app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', '..', 'dist', 'frontend')));
app.use(bodyParser.json());

app.use(routes);

const server = app.listen(port, () => {
  logger.info(`App running at http://localhost:${port}`);
});

process.on('SIGTERM', () => {
  logger.info(`Received SIGTERM, waiting ${WAIT_BEFORE_SERVER_CLOSE}sec until shutdown`);
  setTimeout(() => {
    server.close(() => {
      logger.info('Server closed, exit');
      process.exit(0);
    });
  }, WAIT_BEFORE_SERVER_CLOSE * 1000);
});
