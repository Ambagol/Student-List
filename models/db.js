const mongoose =require('mongoose');

mongoose.connect("mongodb://ambagol:O@io4they@ds157923.mlab.com:57923/heroku_nt2fmg8m", { useNewUrlParser:true}, (err)=> {if(!err){console.log('MongoDb Connection Success')};
});

require('./student.model')