const express = require('express');
const routes = express.Router();

//Controllers
const customers = require('../controllers/customerController');

routes.get('/', (req, res) => {
  res.redirect('/customers');
})

routes.get('/customers', customers.index);
routes.get('/customer/:id', customers.show);

module.exports = routes;