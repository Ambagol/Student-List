const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

router.get('/', (req, res)=>{
    res.render("student/addOrEdit", {
        viewTitle: "Insert Student Info"
    });
})

router.post('/', (req, res)=>{
    if(req.body._id =='')
   insertRecord(req,res);
    else
    updateRecord(req,res);
});

function insertRecord(req,res){
    var student = new Student();
    student.fullName = req.body.fullName;
    student.email = req.body.email;
    student.mobile = req.body.mobile;
    student.city = req.body.city;
    student.save((err, doc)=>{
        if(!err)
        res.redirect('/list');
        else{
            if(err.name === 'ValidationError'){
                 handleValidationError(err, req.body);
                 res.render("student/addOrEdit", {
                    viewTitle: "Insert Student",
                    student:req.body
                });
        }
            else
            console.log("Error during adding Student" +err);
            
        }
    });
}
function updateRecord(req, res){
    Student.findOneAndUpdate({_id:req.body._id}, req.body,{new:true}, (err,doc)=>{
        if(!err){
            res.redirect('/list');
        }else{
            if(err.name =='ValidationError'){
                handleValidationError(err, req.body);
                res.render("student/addOrEdit", {
                    viewTitle : "Update Student",
                    student :req.body
                });
            }
            else console.log("Error during updating the record:" +err);
            
        }

    });
}

router.get('/list', (req, res)=>{
   
   Student.find((err,docs)=>{
       if(!err){
           res.render("student/list",{
               list: docs
           })
       }
   })
});

router.get('/:id', (req, res)=>{
    Student.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("student/addOrEdit",{
                viewTitle:"Update Student Info",
                student: doc
            });
        }
    });
});

function handleValidationError(err,body){
   for(field in err.errors){
       switch (err.errors[field].path){
           case 'fullName':
           body['fullNameError']= err.errors[field].message;
           break;
           case 'email':
           body['emailError']= err.errors[field].message;
           break;
           default:
           break;
       }
   }
}

router.get('/delete/:id', (req,res)=>{
Student.findByIdAndRemove(req.params.id,(err,doc)=>{
 if(!err){
     res.redirect('/list');
 }
 else{console.log('Error in updating the employee :' + err);
 }
});
});
module.exports = router;
