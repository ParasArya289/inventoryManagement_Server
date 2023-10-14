const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
  description: {
    type:String,
    required:true
  },
  amount: {
    type:Number,
    required:true
  }
},{timestamps:true})

const Sale = mongoose.model("Sale",saleSchema);

module.exports = Sale;