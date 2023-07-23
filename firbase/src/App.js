import React from "react";
import NoPage from './Component/pages/NoPage/nopage'
import Admin from './Component/pages/Admin/admin';
import Master from "./Component/pages/Admin/Master";
import Salve from "./Component/pages/Admin/Salve";
import AdLogin from './Component/pages/Admin/Login';
import CustomExport2 from "./Component/pages/Admin/CustomExport2"
import Export from "./Component/pages/Admin/Export";
import RequireAuth from "./Component/hooks/RequireAuth";
import Datatable from "./Component/pages/Admin/Table";
import Datatable2 from "./Component/pages/Admin/DataTablemas";
// Qr
 import QR from "./Component/QR/QR";

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import QR from "./Component/RR2";
import AddMenu from "./Component/pages/Admin/AddMenu";
// 
function App() {

  return (
    <>
          <Router>
                    <Routes>
                      {/* Private routes */}
                       
             s         <Route element={<RequireAuth/>}> 
                        <Route path= "/Master" element = {<Master />} />
                        <Route path ="/Mastable" element= {<Datatable2/>}/>
                        <Route path= "/Sal" element = {<Salve />} />
                        <Route path ="/addMenu" element= {<AddMenu/>}/>
                        <Route path= "/QR" element = {<QR/>} />

                      </Route>
                        
                      {/* Public Routes */}
                      <Route path= "/admin" element = {<Admin />} />
                        <Route path ="/table" element= {<Datatable/>}/>
                      <Route path ="/" element= {<AdLogin/>}/>
                      
                      <Route path ="/ce2" element= {<CustomExport2/>}/>
                      <Route path ="/Export" element= {<Export/>}/>
                      <Route path ="/ord" element= {<getOrder/>}/>
                      
                      
                    {/* Cath all other site */}
                      <Route path= '*' element ={<NoPage/>}/>
                      <Route path= 'no' element ={<NoPage/>}/>
                    </Routes>
          </Router>
      
    </>
  )
}
export default App;