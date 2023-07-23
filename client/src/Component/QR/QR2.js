import React, { useState , useRef } from 'react'
import  {Container, Card, CardContent, Grid ,TextField,Button} from '@mui/material';
import QRCode  from 'qrcode';
import axios from 'axios';
import QrReader from 'react-qr-scanner'
import {  useNavigate } from "react-router-dom";
function QR() {
  const navigate = useNavigate();
  const [textFlied,setextFlid] = useState('');
  const [imageUrl,setImgeUrl] = useState('');
  const [result1,setResult] = useState('');
  const [foundEntry2 ,setfoundEntry] =useState([]);
  const  inputRef = useRef(null);
   const generatedQrcode = async()=>{
    try {
      const res = await QRCode.toDataURL(textFlied)
      setImgeUrl(res)
      console.log(res);
    } catch (error) {
      console.log(error);
    }
   }
   const getQRcode =async() =>{
    try {
      
      // const res = await axios.get(`http://localhost:2610/QR/getQR/${Code}`)
      // console.log(res.data.length);
      // if (res.data.length===0) {
      //   navigate('/no')
        
      // }else{
      //   setfoundEntry(res.data)
      // }
      }
          catch (error) {console.log(error);}
}
// useEffect(()=>{
//   getQRcode();
// //  console.log(menus);
// },[])
    const handleError =(error)=>{
      alert(error);
    }
    const handleScanFile =(result)=>{
      if (result ===null) {
      } else {
        if (result) {
          console.log(result);
          var len =(result.text.length)
            setResult(result.text)
          
        } 
      }
    }
    const onScanFile =()=>{
      var s = '/path/action?id=11612&value=44944';    
      console.log(s);
      var aa = s.substring(0, s.indexOf('?'));
                console.log(aa)
      }
  return (
   <>
    <Container >
      <Card>
        <h2>Please Scan Your Qr Code {result1}</h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} md={6} sm={12} xm={12}>
              <TextField lable ="Enter the code here"onChange={(e)=>setextFlid(e.target.value)} />
              <Button variant='contained' color='primary' onClick={()=>generatedQrcode()}>Genterate</Button>
              {imageUrl ?(<a href={imageUrl} download><img src={imageUrl} alt ='img'/></a>) : null}
            </Grid>
            <Grid item xl={4} md={6} sm={12} xm={12}>
              <QrReader ref={inputRef} delay={5} style={{width: '50%'}} onError={handleError} onScan={handleScanFile}/>
            </Grid>
          </Grid>
          <Button variant='contained' color="secondary" onClick={onScanFile}>Submited</Button>
        </CardContent>
      </Card>
    </Container>
    </>
  )
}


export default QR