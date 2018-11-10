const mongoose =require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI, { useNewUrlParser:true}, (err)=> {if(!err){console.log('MongoDb Connection Success')};
});

require('./student.model')