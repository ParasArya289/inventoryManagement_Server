const express = require("express");
const cors = require("cors");
require("mongodb")

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Inventory Management")
})

app.use((err,req,res,next)=>{
  res.status(500).json({error:"Something Went wrong!!"})
})

app.use((req,res)=>{
  res.status(404).json({error:"Requested API endpoint does not exist"})
})

app.listen(3000, () => {
  console.log("Server started")
})   