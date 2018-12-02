const mongoose =require('mongoose').MongoClient;
var connectionUrl = "mongodb://ambagol:Heroku2@ds157923.mlab.com:57923/heroku_nt2fmg8m"
mongoose.connect(connectionUrl, { useNewUrlParser:true}, (err)=> {if(!err){console.log('MongoDb Connection Success')};
});

require('./student.model')