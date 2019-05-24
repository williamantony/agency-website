require('dotenv').config();

const { PORT } = process.env;

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./api/routes');

const server = express();

server.use(morgan('short'));
server.use(bodyParser.json());
server.use(cors({}));

routes(server);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
