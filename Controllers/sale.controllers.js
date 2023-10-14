const {getSales,createNewSale} = require("../Queries/sale.queries.js");

const getSalesController = async(req,res)=>{
  try{
    const sales = await getSales();
    res.status(200).json({messsage:"Fetched sales",sales})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createNewSaleItemController = async(req,res)=>{
  const {body} = req;
  try{
    const sales = await createNewSale(body);
    res.status(200).json({messsage:"Sale created",sales})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getSalesController,createNewSaleItemController};
