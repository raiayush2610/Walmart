import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import  { useEffect, useState } from 'react'
import axios from 'axios';

import { Button } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
export default function Master() {

  // const id = location.state.seatNo;
  // console.log(id);
  const [user,setUser] = useState([])
  const [aactive,setAactive]=useState(false)
  const [dactive,setDactive]=useState(false)

  const getOrder =async() =>{
    try {
      const res = await axios.get(`http://localhost:2610/admin/user`)
      setUser(res.data)
      }catch (error) {console.log("error");}
}
const Deactivate=(e)=>{
  try {
    axios.put(`http://localhost:2610/admin/updated/deactive/${e}`)
    setAactive(false)
    setDactive(true)
    }catch (error) {console.log("error");}
}
const Activate=(e)=>{
  try {
    axios.put(`http://localhost:2610/admin/updated/active/${e}`)
    setAactive(true)
    setDactive(false)
    }catch (error) {console.log("error");}
}
useEffect(()=>{getOrder();},[])
const columns2 =[
{field: 'username',headerName:'Username',width: 200},
{field:'access',headerName:'Active/Deactive',width: 200},
{ field:'Deactive',headerName:'Deactive',width: 200,renderCell:(params)=>{
  return(
    
    <Button disabled={dactive} onClick={(e)=>Deactivate(params.id)}>Deactivate</Button>
  )
}},
{ field:'Active',headerName:'Active',width: 200,renderCell:(params)=>{
  // console.log(params.id);
  return(
    
    <Button disabled={aactive} onClick={(e)=>Activate(params.id)}>Activate</Button>
  )
}},
]
  return (
    <>
    <Sidebar/>
    <div style={{ height: 700,marginLeft:150,  width: '100%' }}>
      <DataGrid
        rows={user}
        disableSelectionOnClick
        columns={columns2}
        getRowId={(row) => row._id}
        pageSize={10}
      />
    </div>
    </>
  )
}





