import React from 'react';
import  { useEffect, useState } from 'react'
import axios from 'axios';
// import useDemoData  from './DataGrid';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarContainerProps,
  GridToolbarExportContainer,
  GridCsvExportMenuItem,
  GridCsvExportOptions,
  GridExportMenuItemProps,
  useGridApiContext,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
  GridApi,
} from '@mui/x-data-grid';
import MenuItem from '@mui/material/MenuItem';
import { ButtonProps } from '@mui/material/Button';




const getJson = (apiRef: React.MutableRefObject<GridApi>) => {
  // Select rows and columns
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  // Format the data. Here we only keep the value
  const data = filteredSortedRowIds.map((id) => {
    const row: Record<string, any> = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  // Stringify with some indentation
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#parameters
  return JSON.stringify(data, null, 2);
};

const exportBlob = (blob: Blob, filename: string) => {
  // Save the blob in a json file
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  });
};

const JsonExportMenuItem = (props: GridExportMenuItemProps<{}>) => {
  const apiRef = useGridApiContext();

  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={() => {
        const jsonString = getJson(apiRef);
        const blob = new Blob([jsonString], {
          type: 'text/json',
        });
        exportBlob(blob, 'DataGrid_demo.json');

        // Hide the export menu after the export
        hideMenu?.();
      }}
    >
      Export 
    </MenuItem>
  );
};

const csvOptions: GridCsvExportOptions = { delimiter: ';' };

const CustomExportButton = (props: ButtonProps) => (
  <GridToolbarExportContainer {...props}>
    <GridCsvExportMenuItem options={csvOptions} />
    <JsonExportMenuItem />
  </GridToolbarExportContainer>
);

const CustomToolbar = (props: GridToolbarContainerProps) => (
  <GridToolbarContainer {...props}>
    <CustomExportButton />
  </GridToolbarContainer>
);

export default function Export() {
  const [Orders,setOrder] = useState([])

   const getOrder =async() =>{
    try {
      const res = await axios.get(`http://localhost:2610/order/Order/get`)
      const a = res.data;
      setOrder(a)
      }
          catch (error) {console.log("error");}
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
  useEffect(()=>{getOrder();},[])


  return (

    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
       rows={Orders}
        columns={columns2}
        getRowId={(row) => row._id}
      // {...data}
      //   loading={loading}
        components={{ Toolbar: CustomToolbar }}
      />
    </div>
  );
}
