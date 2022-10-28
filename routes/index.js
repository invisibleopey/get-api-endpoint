const express = require('express');
const router = express.Router();

const resBody = {
  slackUsername: 'opey.muritala',
  backend: true,
  age: 25,
  bio: 'A full-stack web developer, and part-time final year medical student.',
};

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(resBody);
});

module.exports = router;
