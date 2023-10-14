const express = require("express");
const inventoryRouter = express.Router();
const {getInventoryController,createInventoryItemController} = require("../Controllers/inventory.controllers.js");

inventoryRouter.get("/",getInventoryController)
inventoryRouter.post("/",createInventoryItemController)

module.exports = inventoryRouter;