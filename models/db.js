const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/StudentDB', { useNewUrlParser:true}, (err)=> {if(!err){console.log('MongoDb Connection Success')};
});

require('./student.model')