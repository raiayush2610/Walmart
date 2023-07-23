import React from "react";
import { SocialIcon } from "react-social-icons";
import { Row, Input, Button } from 'reactstrap'
import { DialogC } from "./DialogC";
import axios from 'axios';
import { useParams } from "react-router-dom";


export default function Social() {
  const profile = useParams();
  const [openInstagram, setOpenInstagram] = React.useState(false);
  const [instagram, setInstagram] = React.useState("");
  const [labelInstagram, setLabelInstagram] = React.useState("Instagram");
  const [openFacebook, setOpenFacebook] = React.useState(false);
  const [facebook, setFacebook] = React.useState("");
  const [labelFacebook, setLabelFacebook] = React.useState("Facebook");
  const [openSpotify, setOpenSpotify] = React.useState(false);
  const [spotify, setSpotify] = React.useState("");
  const [labelSpotify, setLabelSpotify] = React.useState("Spotify");
  const [openWhatsapp, setOpenWhatsapp] = React.useState(false);
  const [whatsapp, setWhatsapp] = React.useState("");
  const [labelWhatsapp, setLabelWhatsapp] = React.useState("Whatsapp");
  const [openMedium, setOpenMedium] = React.useState(false);
  const [medium, setMedium] = React.useState("");
  const [labelMedium, setLabelMedium] = React.useState("Medium");
  const [qr,setQR]=React.useState("");
  const [phone,setPhone]=React.useState("");
  const [email,setEmail]=React.useState("");
  const [imgCollection,setimgCollection]=React.useState('');
  const [pdfCollection,setpdfCollection]=React.useState('');
  const setimg = (e) => {
    setimgCollection(e.target.files)
  }
  const setpdf = (e) => {
    setpdfCollection(e.target.files)
  }
  console.log(imgCollection);
  const setimgfile = (e) => {
    setQR(e.target.files[0])
  }
  async function onSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    formData.append("instagram", instagram);
    formData.append("labelInstagram",labelInstagram);
    formData.append("facebook", facebook);
    formData.append("labelFacebook",labelFacebook);
    formData.append("spotify", spotify);
    formData.append("labelSpotify",labelSpotify);
    formData.append("whatsapp", whatsapp);
    formData.append("labelWhatsapp",labelWhatsapp);
    formData.append("medium", medium);
    formData.append("labelMedium",labelMedium);
    formData.append("name",profile.profile);
    formData.append("qr",qr);
    formData.append("phone",phone);
    formData.append("email",email+"@gmail");
    for (const key of Object.keys(imgCollection)) {
      formData.append('imgCollection',imgCollection[key])
  }
  var formData1 = new FormData();
  formData1.append("name",profile.profile);
  for (const key of Object.keys(pdfCollection)) {
    formData1.append('pdfCollection',pdfCollection[key])
}
console.log(qr);
    const config = {
     headers: {
       "Content-Type": "multipart/form-data"
     }

   }
   const res = axios.post("http://localhost:2610/record/record/add", formData,config)
   const res1 = axios.post("http://localhost:2610/record/record/addpdf", formData1,config)
  //  const { data } = axios.post(
  //   `http://localhost:2610/record/record/add/`,
  //   {
  //     name: profile.profile,
  //     instagram: instagram,
  //   labelInstagram:labelInstagram,
  //   facebook:facebook,
  //   labelFacebook:labelFacebook,
  //   spotify:spotify,
  //   labelSpotify:labelSpotify,
  //   whatsapp:whatsapp,
  //   labelWhatsapp:labelWhatsapp,
  //   medium:medium,
  //   labelMedium:labelMedium
  //   }
  // ) 
  }

  const handleClose = () => {
    setOpenInstagram(false);
    setOpenFacebook(false);
    setOpenSpotify(false);
    setOpenWhatsapp(false);
    setOpenMedium(false);
  };
  function instagramPromot() {
    setOpenInstagram(true);
  }
  function facebookPromot() {
    setOpenFacebook(true);
  }
  function spotifyPromot() {
    setOpenSpotify(true);
  }
  function whatsappPromot() {
    setOpenWhatsapp(true);
  }
  function mediumPromot() {
    setOpenMedium(true);
  }



  return (
    <div className="App">


      {/* Social Media App */}
      <u>Social Media App</u>:<br/>
     {labelInstagram}: <SocialIcon url={`https://www.instagram.com/${instagram}/`} />
      <button style={{ border: "none",backgroundColor:"transparent" }} onClick={() => instagramPromot()}>
        <SocialIcon network="instagram" />
      </button>
      <br />
      {labelFacebook}: <SocialIcon url={`https://www.facebook.com/${facebook}/`} />
      <button style={{ border: "none" , backgroundColor:"transparent"}} onClick={() => facebookPromot()}>
        <SocialIcon network="facebook" />
      </button>
      <br/><br/>

      {/* Music & Podcasts */}
      <u>Music & Podcasts</u>:<br/>
      {labelSpotify}: <SocialIcon url={`http://open.spotify.com/user/${spotify}/`} />
      <button style={{ border: "none" , backgroundColor:"transparent"}} onClick={() => spotifyPromot()}>
        <SocialIcon network="spotify" />
      </button>
      <br/><br/>

      {/* Business */}
      <u>Business</u>:<br/>
      {labelWhatsapp}: <SocialIcon url={`https://wa.me/${whatsapp}/`} network="whatsapp" />
      <button style={{ border: "none" , backgroundColor:"transparent"}} onClick={() => whatsappPromot()}>
        <SocialIcon network="whatsapp" />
      </button>
      <br/><br/>

       {/* Blog */}
       <u>Blogs</u>:<br/>
      {labelMedium}: <SocialIcon url={` https://medium.com/@${medium}/`} network="medium" />
      <button style={{ border: "none" , backgroundColor:"transparent"}} onClick={() => mediumPromot()}>
        <SocialIcon network="medium" />
      </button>
      <br/><br/>

      {/* Payments */}
      <u>Paytm</u>:<br/><br/>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's paytm number" aria-label="Recipient's number" aria-describedby="basic-addon2"/>
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">@paytm</span>
        </div>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Your Paytm QR:</label>
        <input class="form-control" type="file" name="qr" onChange={setimgfile} id="formFile"/>
      </div>
      <br/><br/>

      {/* Contact info */}
      <u>Contact info</u>:<br/>
      <Row className="m-3">
				<Input
        onChange={(e) => setPhone(e.target.value)}
					placeholder="Phone Number"
				/>
			</Row>
      <div class="input-group mb-3">
        <input type="text" onChange={(e) => setEmail(e.target.value)} class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <div class="input-group-append">
          <span class="input-group-text" id="basic-addon2">@gmail.com</span>
        </div>
      </div>
      <br/><br/>

      {/* Content */}
      <u>Content</u>:<br/>
      <div class="mb-3">
        <label for="formFile" class="form-label">Your Images</label>
        <input class="form-control" type="file" name="imgCollection" onChange={setimg} id="formFile" multiple/>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Your pdf</label>
        <input class="form-control" type="file" name="pdfCollection" onChange={setpdf} id="formFile" multiple/>
      </div>


      <button onClick={onSubmit}>Save</button>

      <DialogC open={openInstagram} handleClose={handleClose} setLabel={setLabelInstagram} setSocial={setInstagram} label={labelInstagram}/>
      <DialogC open={openFacebook} handleClose={handleClose} setLabel={setLabelFacebook} setSocial={setFacebook} label={labelFacebook}/>
      <DialogC open={openSpotify} handleClose={handleClose} setLabel={setLabelSpotify} setSocial={setSpotify} label={labelSpotify}/>
      <DialogC open={openWhatsapp} handleClose={handleClose} setLabel={setLabelWhatsapp} setSocial={setWhatsapp} label={labelWhatsapp}/>
      <DialogC open={openMedium} handleClose={handleClose} setLabel={setLabelMedium} setSocial={setMedium} label={labelMedium}/>



    </div>
  );
}
