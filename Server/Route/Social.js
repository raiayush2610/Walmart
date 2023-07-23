const express = require("express");
const app = express();
 const recordRoutes = express.Router();
 const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;
const multer = require("multer");
const socialRecord =require('../Models/socialRecord');
 
const imgconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"../client/src/Component/SocialLinks/uploads")
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

const pdfconfig = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"../client/src/Component/SocialLinks/uploads")
  },
  filename:(req,file,callback)=>{
      callback(null,`pdf-${Date.now()}. ${file.originalname}`)
  }
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const uploadpdf = multer({
  storage: pdfconfig,
  fileFilter: fileFilter
});

// recordRoutes.get('/record/:profile',async(req,res)=>{
//   // console.log(req.params.id);
//   try {
//             const specificQr =await socialRecord.findOne({profile:req.params.profile})
//             res.status(200).json(specificQr)
//   } catch (error) {
//             console.log("dfgwref"+error);
            
//   }
// })

// This section will help you get a list of all the records.
// recordRoutes.get('/record/:profile',function (req, res) {
//   let db_connect = dbo.getDb();
//   db_connect
//     .collection(req.params.profile)
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       res.json(result);
//       console.log(result);

//     });
//  });
 
// This section will help you get a single record by id
recordRoutes.route("/record/:profile").get(function (req, res) {
  console.log("fghedg");
 let db_connect = dbo.getDb();
 let myquery = { profile:  req.params.profile} ;
 db_connect
     .collection("socialRecord")
     .findOne(myquery, function (err, result) {
       if (err) throw err;
       res.json(result);
       console.log(result);
     });
});
 
recordRoutes.post("/record/add",upload.array('imgCollection', 6),function (req, response) {
  const reqFiles = [];
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename)
    }
 let db_connect = dbo.getDb();
//  const {filename1} = req.file;
 let myobj = {
    profile:req.body.name,
    instagram: req.body.instagram,
    labelInstagram:req.body.labelInstagram,
    facebook:req.body.facebook,
    labelFacebook:req.body.labelFacebook,
    spotify:req.body.spotify,
    labelSpotify:req.body.labelSpotify,
    whatsapp:req.body.whatsapp,
    labelWhatsapp:req.body.labelWhatsapp,
    medium:req.body.medium,
    labelMedium:req.body.labelMedium,
    imgCollection: reqFiles,
    phone:req.body.phone,
    email:req.body.email
 };
let name=req.body.name
console.log(req.body.name);
 db_connect.collection("socialRecord").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
   console.log(res);
 });
});

recordRoutes.post("/record/addpdf",uploadpdf.array('pdfCollection', 6),function (req, response) {
  const reqFiles = [];
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename)
    }
 let db_connect = dbo.getDb();
//  const {filename1} = req.file;
 let myobj = {
    profile:req.body.name,
    pdfCollection: reqFiles,
 };
let name=req.body.name
console.log(req.body.name);
 db_connect.collection("socialRecord").insertOne(myobj, function (err, res) {
   if (err) throw err;
   response.json(res);
   console.log(res);
 });
});
 
// recordRoutes.route("/update/:id").post(function (req, response) {
//  let db_connect = dbo.getDb(); 
//  let myquery = { _id: ObjectId( req.params.id )}; 
//  let newvalues = {   
//    $set: {     
//     bookname: req.body.bookname,
//     authorname: req.body.authorname,
//     desc: req.body.desc, 
//     price: req.body.price,
//    imgurl: req.body.imgurl,
//    ownermail: req.body.ownermail,  
//    }, 
//   }
// });
 
// // This section will help you delete a record
// recordRoutes.route("/:id").delete((req, response) => {
//  let db_connect = dbo.getDb();
//  let myquery = { _id: ObjectId( req.params.id )};
//  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
//    if (err) throw err;
//    console.log("1 document deleted");
//    response.json(obj);
//  });
// });

 
module.exports = recordRoutes;