import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import  { useEffect, useState } from 'react'
import axios from 'axios';




export default function CustomExport2() {
  const [Orders,setOrder] = useState([])
  const getOrder =async() =>{
    try {
      const res = await axios.get(`http://localhost:2610/order/Order/get`)
      setOrder(res.data)
      }catch (error) {console.log("error");}
}

const columns2 =[
{field: 'OrderID',headerName:'Id'},
{field: 'Foodname',headerName:'Foodname',width: 200},
{field: 'radio',headerName:'Radio',width: 200},
{field: 'Foodprice',headerName:'Foodprice'},
{field: 'HallNo',headerName:'HallNo'},
{field: 'paymentMode',headerName:'PaymentMethod'},
{field: 'phone',headerName:'PhoneNo',},
{field: 'seatNo',headerName:'seatNo'},
]
useEffect(()=>{ getOrder();},[])
  return (
    <>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={Orders}
        columns={columns2}
        getRowId={(row) => row._id}
        pageSize={9}
      />
    </div>
    </>
  )
}





