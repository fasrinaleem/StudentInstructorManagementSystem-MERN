const mongoose = require("mongoose")

const  schema = new mongoose.Schema({ 

   name : {
       type:String
   },
 
   mail : {
     type: String

    },

    contactNumber : {
      type: Number
    },

     password : {
         type:String
        
     }
})


const Adminmodel =  mongoose.model("admin",schema);

module.exports = Adminmodel;

