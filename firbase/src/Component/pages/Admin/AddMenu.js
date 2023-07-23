import React, { useState } from "react";
// import { useNavigate } from "react-router";
import  Toast  from "../Toast/toast";
import ToastContainer from "../Toast/toastContai";
import 'react-toastify/dist/ReactToastify.css'; 
import axios from 'axios'
import './addmenu.css'
export default function AddMenu() {
 const [form, setForm] = useState({
   name: "",
   price: "",
   category:"",
 });
 const [file, setFile] = useState("");
//  const navigate = useNavigate();
 const setimgfile = (e) => {
    setFile(e.target.files[0])
  }
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }

 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
   var formData = new FormData();
   formData.append("photo", file);
   formData.append("name", form.name);
   formData.append("price", form.price);
   formData.append("category", form.category);
   console.log(file);
   const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
  const res = await axios.post("http://localhost:2610/menu/menu/post", formData, config) 
console.log(res.data);
 if (res.data==="item is save") {
  Toast.msg("item is save")
  
 } else {
  
 }
 
   setForm({ name: "", price: "", src: "",category:""});
  //  navigate("/");
 }
 
 return (
   <div>
      <ToastContainer position="bottom-center" limit={1}/>
     <div className="container ">
         
    
     <form className="card-body" onSubmit={onSubmit}>
          <div className="card-header"><h5>Add Menu </h5></div>
       <div className="mb-3 form-group">
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           placeholder="Enter Item Name"
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="mb-3 form-group">
         <input
           type="text"
           className="form-control"
           id="price"
           value={form.price}
           placeholder="Enter Price"
           onChange={(e) => updateForm({ price: e.target.value })}
         />
       </div>
       <div className="mb-3 form-group">
         <input
           type="text"
           className="form-control"
           id="category"
           value={form.category}
           placeholder="Enter Category Name"
           onChange={(e) => updateForm({ category: e.target.value })}
         />
       </div>
       {/* <select onChange={(e) => updateForm({ category: e.target.value })} className="form-select">
        <option defaultValue disabled>
          Select Fruit
        </option>
        <option value="Apples">Apples</option>
        <option value="Grape">Grape</option>
        <option value="Bananas">Bananas</option>
        <option value="Blueberries">Blueberries</option>
        <option value="Melons">Melons</option>
      </select> */}
       <div className="mb-3 form-group">
         <input
           type="file"
           className="form-control"
           id="src"
           value={form.src}
           placeholder="Enter Image SRC"
           name="photo"
           onChange={setimgfile}
         />
       </div>
       <div className="mb-3 form-group">
         <input
           type="submit"
           value="Add Menu"
           className="submit-btn btn-primary"
         />
       </div>
     </form>
     

     </div>
     </div>
  
 );
}
