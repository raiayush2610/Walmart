const menuRoute =require('express').Router();
const multer = require("multer");
const slave =require('../Models/Menu');

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"../client/src/Component/pages/uploads")
    },
    filename:(req,file,callback)=>{
        callback(null,`imgae-${Date.now()}. ${file.originalname}`)
    }
})
const isImage = (req,file,callback)=>{
    if(file.mimetype.startsWith("image")){
        callback(null,true)
    }else{
        callback(new Error("only images is allowd"))
    }
}
const upload = multer({
    storage:imgconfig,
    fileFilter:isImage
});

menuRoute.get('/menu/get', async (req,res)=>{
    try {
            const Menu =await slave.find({})
            res.status(200).json(Menu)
    } catch (error) {
        res.json(error);
        
    }
})

menuRoute.post('/menu/post',upload.single("photo"), async (req,res)=>{   
    const t="slave"
    const {filename} = req.file;
    try {      
              const newMenu= new slave({
                        name:req.body.name,
                        price:req.body.price,
                        quantity:1,
                        inCart:false,
                        src:filename,
                        categoryName:req.body.category
              })
              console.log(newMenu);
              const save= await newMenu.save()
              res.json("item is save")
              
    } catch (error) {console.log(error);}
    
})

module.exports = menuRoute;