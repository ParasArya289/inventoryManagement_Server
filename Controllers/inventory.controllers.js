const {getInventory,createInventoryItem} = require("../Queries/inventory.queries.js");

const getInventoryController = async(req,res)=>{
  try{
    const inventory = await getInventory();
    res.status(200).json({messsage:"Fetched inventory",inventory})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

const createInventoryItemController = async(req,res)=>{
  const {body} = req;
  console.log({body})
  try{
    const inventory = await createInventoryItem(body);
    res.status(200).json({messsage:"Item created",inventory})
  }catch(error){
    res.status(500).json({error:error.message})
  }
}

module.exports = {getInventoryController,createInventoryItemController};
