const authGuard = require("../auth/authGuard");
const Order = require("../models/orderModels");

const router = require("express").Router();

router.post("/create", async(req,res)=>{ //authguard
const {cart, totalAmount, shipingAddress}= req.body;
if(!cart|| !totalAmount || !shipingAddress){
    return res.status(400).json({msg:"please enter all fields"});
}

try{

    const order= new Order({
        cart: cart,
        totalAmount: totalAmount,
        shipingAddress: shipingAddress,
        user: "64683e786428a9bd2b32e68f" //req.user.id

    })

    await order.save();
    res.json("order created successfully");

}catch(error){
    console.log(error);
    res.status(500).json({msg:error});

}
});

router.get("/get_single", async(req, res)=>{
    try{
        const orders= await Order.find({user:'64683e786428a9bd2b32e68f'});
        res.json(orders);

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
    }
});

router.get("/get_All", async(req,res)=>{
    try{
const order= await Order.find({})
res.json(order)
    }catch(error){
        res.json("order fetch failed")
    }
})

//change order status

router.put("/change_status/:id", async(req, res)=>{
    try{
//find the order
const order= await Order.findById(req.params.id);
order.status=req.body.status;
 await order.save();
res.json("order status changed successfully");
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error});
    }
})
module.exports=router;