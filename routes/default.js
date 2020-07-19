const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Application',
    heading: 'Hello World Heading'
  });
  //res.send('Hello World - is here !!!');
});

module.exports = routes;
