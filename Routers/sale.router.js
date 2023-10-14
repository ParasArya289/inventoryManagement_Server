const express = require("express");
const salesRouter = express.Router();
const {getSalesController,createNewSaleItemController} = require("../Controllers/sale.controllers.js");

salesRouter.get("/",getSalesController)
salesRouter.post("/",createNewSaleItemController)

module.exports = salesRouter;