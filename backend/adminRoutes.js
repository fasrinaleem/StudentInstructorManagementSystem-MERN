const express =  require("express")
const router = express.Router() 
const Adminmodel = require("./adminSchema")


router.get("/admin/edit" ,(req,res) => { 
    Adminmodel.find((err,admin) =>{
       if(err) {
           console.log(err)
       }
       else {
           res.json(admin)
       }
          
       })
   
 })

 router.get("/admin/edit/:id" ,(req,res) => { 
    let id = req.params.id;
    Adminmodel.findById(id,(err,admin) =>{
          res.json(admin)
    })
   
 })



router.post("/admin/add" , (req,res) => {
   let adminmodel  = new Adminmodel(req.body);
 
    adminmodel.save().then( admin => {
        res.status(200).json({ "admin" :"admin added succesfuully" })
    }).catch(err =>{
        res.status(400).send("adding new admin failed")
    })
})

router.post("/admin/update/:id",(req,res) =>{
    Adminmodel.findById(req.params.id,(err,admin) => {
        if(!admin){
            res.status(404).send("data is not found");
        }
        else{
            admin.name = req.body.name;
            admin.mail = req.body.mail;
            admin.number= req.body.number;
            admin.password= req.body.password;

            admin.save().then( (admin) =>{
                res.json("admin updated")
             }).catch( (err) =>{
                 res.status(400).send("updated not succesful")
             })
        }
    })
})

router.delete("/admin/delete/:id",(req,res) => {
    Adminmodel.findOneAndDelete({_id:req.params.id},(err,admin)=>{
       if(err) {
           res.json(err);
       } 
       else{
           res.json("deleted successfully");
       }
    })
})


// router.put("/admin/rtt", (req,res) =>{
//     res.send({ type: "put"})
// })


// router.delete("/admin/de" ,(req,res) => {
//     res.send({ type: "delete"})
// })

module.exports = router;