const foodroute =require('express').Router();

const Food =require('../Models/Resturant');

foodroute.post('/item/post', async (req,res)=>{
          // console.log("post require is working");
          let guid = () => {
            let s4 = () => {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(4)
                    .substring(1);
            }
           
            return s4 + "-" + s4*2();
        }// getering the unqie code
        
        console.log(guid);
        const unquidid=guid ();
        console.log(unquidid);
          try {
            
                    const newfood= new Food({
                              foodNumber:  unquidid,
                              Foodname:req.body.foodName,
                              Foodprice:req.body.foodPrice
                    })
                    console.log(newfood);
                    const save= await newfood.save()
                    res.json("item is save")
                    
          } catch (error) {console.log(error);}
          
})

// getting the all item present in cart
foodroute.get('/food/carts',async(req,res)=>{
          // console.log("getting the all item present in cart get requst is working");
          try {
                    const specificItem =await Food.find({})
                    res.status(200).json(specificItem)
          } catch (error) {
                    console.log(error);
                    
          }
})
//getting the item by name
foodroute.get('/food/:name',async(req,res) =>{
    // console.log("getting the paticular get rquest is working");
            const food =req.params.name;
            console.log(food);
          try {
            let query =await Food.findOne({Foodname: food})
             res.json(query);
           }catch (error) {console.log(error);}
          
        
})

// Delete Item by name
foodroute.delete('/food/:name', async (req,res)=>{
          // console.log("Deteling  the paticular get item  rquest is working");

          console.log(req.params.name);
          
          try {
              const deleteItem = await Food.findOneAndRemove(req.params.name);
              res.status(200).json('Item deleted');
          } catch (error) {
              res.json(error)
          }
})
      
// Delte all
foodroute.delete('/cart/empty',async (req, res)=>{
          // console.log("/cart/empty get rquest is working");

try {
          const deleteAll = await Food.deleteMany(); 
          res.status(200).json('Items deleted');       
} catch (error) {
          console.log(error);
}
})


module.exports = foodroute;