const express = require('express');
const app = express()

app.get('/', function (req, res) {
  res.sendfile('sample.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});