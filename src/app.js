const express = require('express');
const cors    = require('cors');
const morgan  = require('morgan');
const dotenv  = require('dotenv').config();

const routes = require('./reserve/reserveRoutes');

require('./database/connect');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use(routes);

module.exports = app;