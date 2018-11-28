import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';


const app = express();
const http = require('http');


app.use(bodyParser.json());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use('/api/v1', router);

// returns 404 for unknown routes
app.all('*', (req, res) => {
  res.status(404).send('Hello world!');
});

const port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
export default app;
