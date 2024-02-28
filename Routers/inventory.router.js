const express = require("express");
const inventoryRouter = express.Router();
const {getInventoryController,createInventoryItemController,deleteInventoryItemController,updateInventoryItemController} = require("../Controllers/inventory.controllers.js");

inventoryRouter.get("/",getInventoryController)
inventoryRouter.post("/",createInventoryItemController)
inventoryRouter.post("/update/:inventoryId",updateInventoryItemController)
inventoryRouter.delete("/delete/:inventoryId",deleteInventoryItemController)

module.exports = inventoryRouter;