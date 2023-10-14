const Inventory = require("../Models/inventory.model.js");

const getInventory = async () => {
  try {
    const inventory = await Inventory.find().sort({_id: -1});
    return inventory;
  } catch (error) {
    throw new Error("Unable to fetch inventory")
  }
}

const createInventoryItem = async (data) => {
  try {
    const newItem = new Inventory(data)
    const savedItem = await newItem.save();
    return await getInventory();
  } catch (error) {
    throw error
  }
}


module.exports = { getInventory, createInventoryItem };