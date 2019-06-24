const mongoose = require("mongoose")

const  schema = new mongoose.Schema({ 

  instructorID: {
    type: String,
    required: true
},

     password : {
         type:String
        
     },

     userType:{
      type:String,
      required:true
  }

})


const Instructormodel =  mongoose.model("instlogschema",schema);

module.exports = Instructormodel;