import React, { useState  } from 'react'
import axios from 'axios';

import QRCode  from 'qrcode';

function QR() {
  const [imageUrl,setImgeUrl] = useState('');
  const [btn,setbtn] =useState(false);
  const [values, setvalues] = useState({
    id: "",
    Name: "",
    Audino:"",
    mall: "",
    hallno:"",
  });
   const addItem = async() => {
    try {
      const linkes= "http://localhost:3000/"
      const res = await QRCode.toDataURL(linkes+values.Sitno);
      
      setImgeUrl(res)
      axios.post(`http://localhost:2610/QR/postQR`,
      {
        id:values.id,
        Name:values.Name,
        Sit:values.Sitno,
        Audi:values.Audino,
        Hall:values.hallno,
        Mall:values.mall,
        // I:imageUrl
      })
      setbtn(true)
    } catch (error) {console.log(error);}
  }

  const onDownloadClick = () => {
    const fileName = values.id;
    
      let aEl = document.createElement("a");
      aEl.href = imageUrl;
      aEl.download = fileName+".png";
      document.body.appendChild(aEl);
      aEl.click();
      document.body.removeChild(aEl);
    
  };
  return (
   <>
             
             <h5>form fill up </h5>
           <form>
            <div className='form'>       
            
          <input lable ="id" placeholder="id" onChange={(e)=>setvalues((prev)=>({...prev ,id:e.target.value}))} />
          <input lable ="Name" placeholder="Name" onChange={(e)=>setvalues((prev)=>({...prev ,Name:e.target.value}))}/>
          <input lable ="Sit no" placeholder="Sitno" onChange={(e)=>setvalues((prev)=>({...prev ,Sitno:e.target.value}))} />
          <input lable ="Audi no" placeholder='Audi no' onChange={(e)=>setvalues((prev)=>({...prev ,Audino:e.target.value}))} />
          <input lable ="Hall" placeholder='hall'onChange={(e)=>setvalues((prev)=>({...prev ,hallno:e.target.value}))} />
          <input lable ="Mall" placeholder='Mall' onChange={(e)=>setvalues((prev)=>({...prev ,mall:e.target.value}))} />
          
          <button onClick={e => {addItem(e.preventDefault())}}>Sumit</button>
          </div>
        </form>

        <div >
        
        {btn===true ?(<div id='qrCodeEl'> <a href={imageUrl}  download><img id="qrCodeEl" classname ="asd"src={imageUrl} onClick={onDownloadClick} alt ='img'/></a></div>) : null}
       <button onClick={onDownloadClick}>download</button>
       
      </div>
       





  
    </>
  )
  }


export default QR
