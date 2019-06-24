const express =  require("express")
const instLogrouter = express.Router() 
const Instructormodel = require("./instLogSchema")
const mongoose=require('mongoose');


const checkAuth=require("../auth/checkAuthInstructor");

const jwt=require('jsonwebtoken');
const keys=require('../config/key.json');
const JWT_KEY=keys.JWT_KEY;


instLogrouter.post("/instructor/log/add" , (req,res) => { 

    Instructormodel.find({
        instructorID: req.body.instructorID
    }).exec()
        .then(inst =>{
            if(inst.length>=1){
                res.status(409).json({
                    message:'instructor already exists'
                });
            }else {
                const instructormodel =new Instructormodel({
                    _id:mongoose.Types.ObjectId(),
                    instructorID:req.body.instructorID,
                    password:req.body.password,
                    userType:'instructor'
                });

                instructormodel.save().then(result=>{
                    console.log(result);
                    res.status(201).json({
                        message:'instructor added',
                        createdAdmin:result
                    });
                }).catch(err=>{
                    console.log(err.message);
                    res.status(500).json({
                        error:err
                    })
                })
            }
        })


})

//login 

instLogrouter.post("/instructor/login",(req,res)=>{
    console.log(req.body.instructorID)
    Instructormodel.find({instructorID:req.body.instructorID })
    .exec()
    .then(inst=>{
        console.log(inst)
        if(inst.length<1){
            return res.status(401).json({
                message:'Authorization Failed!'
            });
        }
        if(inst){
           //correct password
            const token=jwt.sign({
                   id:inst[0]._id,
                   instructorID:inst[0].instructorID,
                   userType:inst[0].userType

            },
            JWT_KEY,
            {
                 expiresIn: "1h"
            }
            );
           // console.log(instructorID);
             return res.status(200).json({
                message:'Authorization Success',
                token:token
             });
        }
        res.status(401).json({
            message:'Authorization Failed!'
        });
    }).catch(err=>{
    console.log(err);
    res.status(500).json({
        error:err
    });
})

});

module.exports = instLogrouter;