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

    dept:{
        type:String
    },

    title:{
      type:String
    },

    password : {
        type:String

    }
})


const Instructor =  mongoose.model("instructor",schema);

module.exports = Instructor;

