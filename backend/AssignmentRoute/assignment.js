const express =  require("express")
const router = express.Router()
const Assignmentmodel = require("../Assignment");



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

})

//view assignment with id
router.get("/:id", (req, res)=>
{
    let id = req.params.id;
    Assignmentmodel.findById(id, (err, Assignment)=>{
        res.json(Assignment)
    })
});

module.exports = router;
