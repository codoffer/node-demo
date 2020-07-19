const express = require('express');
const app = express();
const config = require('config');
const debug = require('debug')('app:init');

app.set('view engine', 'pug');
app.set('views', './views');

//Configuration
console.log('Application Name ' + config.get('name'));

debug('Application has been started');
debug('Raju has been worked');

app.use((req, res, next) => {
  console.log('logging');
  next();
});

const courses = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' }
];

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Express Application',
    heading: 'Hello World Heading'
  })
  //res.send('Hello World - is here !!!');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3, 4]);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find((c) => c.id == parseInt(req.params.id));
  if (!course) res.status(404).send('No course found');
  res.send(course);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Listening port on ${port} ...`);
});

/* const Logger = require('./logger');

const logger = new Logger();

logger.on('messageListner', (arg) => {
    console.log('Message Listner : ', arg);
});

logger.showMessage('Test'); */
