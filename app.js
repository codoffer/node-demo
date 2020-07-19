const express = require('express');
const app = express();
const config = require('config');
const debug = require('debug')('app:init');

const defaultRoutes = require('./routes/default');
const courseRoutes = require('./routes/courses');

//Get environment
//const environment = app.get('env');

app.set('view engine', 'pug');
app.set('views', './views');

//Configuration
console.log('Application Name ' + config.get('name'));

debug('Application has been started');
//debug('Raju has been worked');

//Custom Middleware
/* app.use((req, res, next) => {
  console.log('logging');
  next();
}); */

app.use('/', defaultRoutes);
app.use('/api/courses', courseRoutes);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening port on ${port} ...`);
});
