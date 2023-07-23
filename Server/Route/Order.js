const Orderroute =require('express').Router();

const Order =require('../Models/Order');
// posting  order
Orderroute.post('/Order/post', async (req,res)=>{

    try {
      const date=new Date();
        let day=date.getDate();
        let month=date.getMonth()+1;
        let year=date.getFullYear();
        let currentDate=`${day}-${month}-${year}`;
        let time = new Date().toLocaleTimeString();

              const newOrder= new Order({
                        OrderID:req.body.orderID,
                        Foodname:req.body.foodName,
                        Foodprice:req.body.foodPrice,
                        seatNo:req.body.seatNo,
                        HallNo:req.body.HallNo,
                        radio:req.body.radio,
                        phone:req.body.phone,
                        paymentMode:req.body.paymentMode,
                        date:currentDate,
                        time:time,
                        Orderby:req.body.Orderby

              })
              console.log(newOrder);
              const save= await newOrder.save()
              res.json("Order is save")
              
    } catch (error) {console.log(error);}
    
})
// Getting the all ORder
Orderroute.get('/Order/get', async (req,res)=>{
    try {
            const AllOrder =await Order.find({})
            res.status(200).json(AllOrder)
    } catch (error) {
        res.json(error);
        
    }
})
// Getting the  ORder where payment is cod
Orderroute.get('/paymentMode/:payment', async (req,res)=>{
    // console.log(" Getting the  ORder where payment is cod");
                const payment = req.params.payment
    try {
            const Codeorder =await Order.find({paymentMode: payment})
            res.status(200).json(Codeorder)
    } catch (error) {
        res.json(error);
        
    }
})
//  Getting the order from paticular hall
Orderroute.get('/hall/:no', async (req,res)=>{
    // console.log("Getting the order from paticular hall");
    const HallNo = req.params.no
    // console.log(req.params.no);
try {
const Orderbyhall =await Order.find({HallNo: HallNo })
res.status(200).json(Orderbyhall)
} catch (error) {
res.json(error);

}
})
// Getting the order by Custmer Id
Orderroute.get('/:Id', async (req,res)=>{
    // console.log("wokrdf");
    const orderID = req.params.Id
try {
const OrderbyId =await Order.find({OrderID: orderID  })
res.status(200).json(OrderbyId)
} catch (error) {
res.json(error);

}
})
//  Getting the order by phone no
Orderroute.get('/phone/:phone', async (req,res)=>{
    const phoneNo = req.params.phone
    // console.log(phoneNo);
try {
const OrderbyId =await Order.find({phone: phoneNo  })
res.status(200).json(OrderbyId)
} catch (error) {
res.json(error);

}
})
//Getting the order by seat no 
Orderroute.get('/seatno/:seatno', async (req,res)=>{
    const Seatno = req.params.seatno
    // console.log(phoneNo);
try {
const OrderbyId =await Order.find({seatNo: Seatno  })
res.status(200).json(OrderbyId)
} catch (error) {
res.json(error);

}
})
//Getting the order by which slave no 
Orderroute.get('/slave/:slave', async (req,res)=>{
    const slave = req.params.slave
    
try {
const findbyslave =await Order.find({Orderby: slave  })
res.status(200).json(findbyslave)
} catch (error) {
res.json(error);

}
})

// Getting the specific ORder
Orderroute.get('/Order/get/:user', async (req,res)=>{
    try {
        console.log(req.params.user);
        const specificUser =await Order.find({Orderby:req.params.user})
            res.status(200).json(specificUser)
    } catch (error) {
        res.json(error);
        
    }
})


module.exports = Orderroute;
