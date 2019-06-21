const mongoose =  require("mongoose")
const router =  require("./adminRoutes")
const bodyParser = require("body-parser")
const express = require ("express")
const app  = express();


mongoose
  .connect(
    "mongodb+srv://Fasrin:0767739896@mydb-pazde.mongodb.net/AF_WD_19?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });


app.use(bodyParser.json());

app.use("/api",router)



app.listen(4000,() => {
    console.log("listening on port 4000")
})


