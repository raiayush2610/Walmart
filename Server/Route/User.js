// all are unused 
const approuter = require('express').Router();


const bcrypt = require("bcrypt");
const User = require('../models/adminModel');

approuter.post("/register",async function(req,res){
    console.log("this is workin");
  try{
    const plainPassword = req.body.password;
    const hashPassword = bcrypt.hashSync(plainPassword, 7);

    const newItem = new User({
        
        username: req.body.username,
        password: hashPassword,
        admintype: "Slave",
        access:true
    })
    // save
    const save = await newItem.save()
    // console.log(newItem);

    res.status(200).json(newItem);
} catch (error) {
    res.json(error)
    
}
})
approuter.post("/adminLogin",async function(req,res){
  try{
    const reqEmail = req.body.username;
        const reqPassword = req.body.password;
        // console.log(reqEmail);
        const item = await User.findOne({username: reqEmail});
        // console.log(item);
        if(item === null){
            res.json("no")
        }else{
        const savePassword = item.password;
        if(bcrypt.compareSync(reqPassword, savePassword) === true){
            // console.log(reqEmail);
            if(reqEmail !="master@master.com"){
                res.json("slave") 
                // console.log("fcghsdjfc");
            }else if(reqEmail =="master@master.com"){
                res.json("master")
            }
            else{
               console.log("True");
            }
               
        }else if(bcrypt.compareSync(reqPassword, savePassword) === false){
            res.json("false");
        }
    }
} catch (error) {
    res.json(error)
    
}
})
approuter.get('/user',async(req,res)=>{
        //   console.log("working");
          try {
                    const specificUser =await User.find({admintype:"Slave"})
                    res.status(200).json(specificUser)
          } catch (error) {
                    console.log(error);
                    
          }
})
approuter.put('/updated/deactive/:id', async (req, res)=>{
    console.log("update post is working");
          console.log(req.params.id);
        //   console.log(req.body);
        
          try {
              const updateuser = await User.findByIdAndUpdate(req.params.id, {$set:{access: false } });
            //   console.log(updateDept);
          } catch (error) {
              res.json(error)
          }
})
approuter.put('/updated/active/:id', async (req, res)=>{
    console.log("update post is working");
          console.log(req.params.id);
        //   console.log(req.body);
        
          try {
              const updateuser = await User.findByIdAndUpdate(req.params.id, {$set:{access: true } });
            //   console.log(updateDept);
          } catch (error) {
              res.json(error)
          }
})
approuter.get('/getname/:username',async(req,res)=>{
    console.log(req.params.username);
    console.log("master");
    try {
              const specificUsername =await User.find({username:req.params.username})
              res.status(200).json(specificUsername)
              console.log(specificUsername);
    } catch (error) {
              console.log("dfgwref"+error);
              
    }
})

module.exports = approuter;