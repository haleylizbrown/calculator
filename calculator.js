//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
const port = 3000;

app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', function(req, res) {

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var BMI = weight/Math.pow(height, 2);
  res.send('My BMI is ' + BMI + '.');
});

app.listen(port, function() {
  console.log('Calculator listening on port ' + port + ".");
});
