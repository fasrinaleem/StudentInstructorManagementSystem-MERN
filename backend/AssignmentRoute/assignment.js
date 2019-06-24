const express =  require("express")
const router = express.Router()
const Assignmentmodel = require("../Model/Assignment");



router.get('/test', (req, res) => res.json({ msg: 'assignment Works' }));

//add new assignment
router.post("/add" , (req,res) => {
    let assignmentmodel  = new Assignmentmodel(req.body);

    assignmentmodel.save().then( assign => {
        res.status(200).json({ "assignment" :"assignment added successfully" })
    }).catch(err =>{
        res.status(400).send("adding new assignment failed")
    })
});

//view All assignment
router.get("/all" ,(req,res) => {
    Assignmentmodel.find((err,assig) =>{
        if(err) {
            console.log(err)
        }
        else {
            res.json(assig)
        }

    })

});


//Get Assignment By ID
router.get("/edit/:id" ,(req,res) => {
    let id = req.params.id;
    Assignmentmodel.findById(id,(err,Assignment) =>{
        res.json(Assignment)
    })

});

//Update Assignment
router.post("/update/:id",(req,res) =>{
    Assignmentmodel.findById(req.params.id,(err,Assignment) => {
        if(!Assignment){
            res.status(404).send("data is not found");
        }
        else{
            Assignment.name = req.body.name;
            Assignment.status = req.body.status;
            Assignment.dueDate= req.body.dueDate;

            Assignment.save().then( (Assignment) =>{
                res.json("Assignment updated")
            }).catch( (err) =>{
                res.status(400).send("updated not successfully")
            })
        }
    })
});

//Assignment Delete
router.delete("/delete/:id",(req,res) => {
    Assignmentmodel.findOneAndDelete({_id:req.params.id},(err,assignment)=>{
        if(err) {
            res.json(err);
        }
        else{
            res.json("deleted successfully");
        }
    })
});


module.exports = router;
