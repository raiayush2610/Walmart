const Cartroute =require('express').Router();

const Cart =require('../Models/Cart');
// posting the all item
Cartroute.post('/Cart/post', async (req,res)=>{
          // console.log("post require is working");
         
          try {
            
                    const newCart= new Cart({
                              OrderID:req.body.orderID,
                              Foodname:req.body.foodName,
                              Foodprice:req.body.foodPrice,
                              seatNo:req.body.seatNo,
                              HallNo:req.body.HallNo,
                              radio:req.body.radio,
                              Mall:req.body.Mall,
                              paymentStatus:req.body.paymentStatus
                    })
                    console.log(newCart);
                    const save= await newCart.save()
                    res.json("item is save")
                    
          } catch (error) {console.log(error);}
          
})
// getting the all item present in cart
Cartroute.get('/Cart/carts',async(req,res)=>{
          // console.log("getting the all item present in cart get requst is working");
          try {
                    const specificCart =await Cart.find({})
                    res.status(200).json(specificCart)
          } catch (error) {
                    console.log(error);
                    
          }
})
// getting the vart by id 
Cartroute.get('/Cart/:id',async(req,res) =>{
    // console.log("getting the paticular get rquest is working");
            const id =req.params.id;
            console.log(id);
          try {
            let query =await Cart.findOne({_id: id})
             res.json(query);
           }catch (error) {console.log(error);}
          
        
})

// Delete cat by id
Cartroute.delete('/Cart/:id', async (req,res)=>{
          // console.log("Deteling  the paticular get item  rquest is working");

          console.log(req.params.id);
          
          try {
              const deleteItem = await Cart.findOneAndRemove(req.params.id);
              res.status(200).json('Item deleted');
          } catch (error) {
              res.json(error)
          }
})
      
// Delte all
Cartroute.delete('/cart/empty',async (req, res)=>{
          // console.log("/cart/empty get rquest is working");

try {
          const deleteAll = await Cart.deleteMany(); 
          res.status(200).json('Items deleted');       
} catch (error) {
          console.log(error);
}
})
module.exports = Cartroute;