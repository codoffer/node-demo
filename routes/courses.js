const express = require('express');
const routes = express.Router();

const courses = [
  { id: 1, name: 'Course 1' },
  { id: 2, name: 'Course 2' },
  { id: 3, name: 'Course 3' }
];

routes.get('/', (req, res) => {
  res.send([1, 2, 3, 4]);
});

routes.get('/:id', (req, res) => {
  const course = courses.find((c) => c.id == parseInt(req.params.id));
  if (!course) res.status(404).send('No course found');
  res.send(course);
});

module.exports = routes;
