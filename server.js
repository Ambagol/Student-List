require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const studentController = require('./controllers/studentController');
const bodyparser =require('body-parser');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use(bodyparser.json());
app.set('views', path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname :'hbs', defaultLayout:'mainLayout', layoutsDir: __dirname+ "/views/layouts/"}));
app.set('view engine', 'hbs');
app.listen(port,function(){
    console.log("Express server started at port :" ,+port);
    
});

app.use('/student',studentController);