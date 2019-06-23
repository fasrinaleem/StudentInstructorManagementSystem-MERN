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


module.exports = router;
