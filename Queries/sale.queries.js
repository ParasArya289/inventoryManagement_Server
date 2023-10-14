const Sale = require("../Models/sale.model.js");

const getSales = async () => {
  try {
    const sales = await Sale.find().sort({_id: -1});
    return sales;
  } catch (error) {
    throw new Error("Unable to fetch sales")
  }
}

const createNewSale = async (data) => {
  try {
    const newSale = new Sale(data)
    const savedSale = await newSale.save();
    return await getSales();
  } catch (error) {
    throw error
  }
}


module.exports = { getSales, createNewSale };