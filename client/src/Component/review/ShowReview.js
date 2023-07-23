import React, { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Input, Button } from 'reactstrap'
import StarPicker from 'react-star-ratings';
import Rating from '@mui/material/Rating';
import Axios from "axios";
import Scrollbar from "react-scrollbars-custom";
import Toast from "../pages/Toast/toast"
import ToastContainer from "../pages/Toast/toastContai";
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import emailjs from '@emailjs/browser';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';






export default function ShowReview(){
    const [review, setReview] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [rev, setRev] = React.useState("");
    const [id, setId] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [reply, setReply] = React.useState("");
const profile=useParams();
const fetchreview = async () => {
  const { data } = await Axios.get(
    `http://localhost:2610/review/getReview/${profile.profile}`
  );
  setReview(data);
  console.log(data);
};
useEffect(() => {
    fetchreview();
  }, []);

  function deletef(id){
    console.log(id);
    try {
      const res = fetch(`http://localhost:2610/review/delete/${id}`,
      {
       method: "DELETE",
       body:id,
   })     
   Toast.error("Review Deleted");
 
  }
  catch(err){
      console.log(err);
  }
  }

  function promptMe(id,name,email,review){
    setOpen(true);
    setRev(review);
    setId(id);
    setName(name);
    setEmail(email);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const cartPriceTotal = review.reduce(
    (acc, item) => acc + item.stars,
    0
  );
  const obj = {
        from_name:"Tapop",
        to_name:name,
        reply:reply,
        to_email:email,
        profile:profile,
      };
  const handleReply = () => {
    console.log(reply);
        emailjs.send('service_jna76ls', 'template_89a2j3o', obj, 'O4qp9tazNCAK-DBog')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };
    const [sortreview, setSortreview] = React.useState('');
  
    // const handleChange = (event: SelectChangeEvent) => {
    //   setSortreview(event.target.value);
    //   console.log(sortreview);
    // };
console.log(sortreview);

    return(
        <>
        <h3>Review  <Rating name="half-rating-read" value={cartPriceTotal/review.length} precision={0.5} readOnly />{cartPriceTotal/review.length}({review.length})</h3>
        <FormControl  sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label">All</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortreview}
          label="All"
          onChange={e => setSortreview(e.target.value)}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
               <ToastContainer position="bottom-center" limit={1}/>

        <div className="row">
          {review.map((off) => (
            // <ListGroupItem key={off.id} className="mb-3">
            <div className="col-sm-15 mb-2" key={off._id}>
              <div className="card">
                <div className="card-body">
                  <div className="text-info">
                    <h6>
                      Reviewer Name:
                      <span className="text-uppercase"> {off.name}</span>
                    </h6>
                  </div>
                  <div>Email : {off.email}</div>
                  <div>Title : {off.title}</div>
                  <div>Review : {off.review}</div>
                  <div><Rating name="half-rating-read" value={off.stars} precision={0.5} readOnly />{off.stars}</div>
                  <div><Button onClick={()=>{deletef(off._id)}}>Delete</Button></div>
                  <div><button type="button" className="btn btn-success" onClick={()=>promptMe(off._id,off.name,off.email,off.review)}>Reply</button></div>

                  <br/>
                 
                </div>
              </div>
            </div>
          ))}
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Reply to {name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {rev}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="xyz"
            label="Comment on the review..."
            type="text"
            fullWidth
            variant="standard"
            onChange={e => setReply(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleReply}>Send Reply</Button>
        </DialogActions>
      </Dialog>
          </div>
          </>
    )
}