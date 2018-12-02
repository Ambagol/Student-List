const mongoose = require('mongoose');
var connectionUrl = 'mongodb://ambagol:Heroku2@ds123619.mlab.com:23619/studentdb';
mongoose.connect(connectionUrl, { useNewUrlParser: true });

require('./student.model');
