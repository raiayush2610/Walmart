import React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from 'reactstrap'

export const DialogC =({open,handleClose,setLabel,setSocial,label})=>(
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{label} </DialogTitle>
        <DialogContent>
          <DialogContentText>Label:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="xyz"
            label="Enter Your Label..."
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setLabel(e.target.value)}
          />
          <DialogContentText>Username:</DialogContentText>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">@</span>
            </div>
            <input type="text" onChange={(e) => setSocial(e.target.value)} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
)