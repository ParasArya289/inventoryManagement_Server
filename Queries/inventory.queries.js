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
const updateInventoryData = async (id,data) => {
  try {
    const savedInevntory = await Inventory.findByIdAndUpdate(id,data);
    if(!savedInevntory){
      throw new Error("Data not found!!")
    }
    return await getInventory();
  } catch (error) {
    throw error
  }
}
const deleteInevntoryData = async (id) => {
  try {
    const savedInevntory = await Inventory.findByIdAndDelete(id);
    if(!savedInevntory){
      throw new Error("Inventory not found!!")
    }
    return await getInventory();
  } catch (error) {
    throw error
  }
}


module.exports = { getInventory, createInventoryItem,updateInventoryData,deleteInevntoryData };