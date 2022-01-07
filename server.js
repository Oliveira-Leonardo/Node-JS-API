var express = require('express');
app = express();
port = process.env.port || 27017;
mongoose = require('mongoose');
user = require('../nodeAPI/api/models/users');
bodyParser = require('body-parser');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes = require ('./api/routes/userRoutes');
routes(app);

app.listen(port);