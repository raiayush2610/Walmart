const ReviewRouter =require('express').Router();
const ObjectId = require("mongodb").ObjectId;

const Review =require('../Models/Review');

// Getting the all Review  
ReviewRouter.get('/getReview',async(req,res)=>{
          
          try {
                    const specificReview =await Review.find({})
                    res.status(200).json(specificReview)
          } catch (error) {
                    console.log(error);
                    
          }
})

//  Posting the Review
ReviewRouter.post('/setReview', async(req,res)=>{
          try {
                    const newReview =  new Review({
                              name:req.body.name,
                              email:req.body.email,
                              stars:req.body.stars,
                              title:req.body.title,
                              review:req.body.review,
                              profile:req.body.profile
                    })
                    res.json(newReview);
                    const save = await newReview.save()
          } catch (error) {console.log(error);}
})

ReviewRouter.get('/getReview/:profile',async(req,res)=>{
    // console.log(req.params.id);
    try {
              const specificReview =await Review.find({profile:req.params.profile})
              res.status(200).json(specificReview)
    } catch (error) {
              console.log("dfgwref"+error);
              
    }
})
     
ReviewRouter.delete("/delete/:id",async(req, response) => {
	
	let myquery = { _id: ObjectId( req.params.id )};
	Review.deleteOne(myquery, function (err, obj) {
	  if (err) throw err;
	  console.log("1 document deleted");
      console.log(obj);
	});
   });


module.exports = ReviewRouter;