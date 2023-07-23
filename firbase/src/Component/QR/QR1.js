import React, { useEffect, useRef, useState } from "react";
import QrCodeStylingComponent from "./QrCodeStylingComponent";
import QRCodeStyling from "qr-code-styling";



export default function QR1() {
  const [url, setUrl] = useState("https://qr-code-styling.com");
  const [fileExt, setFileExt] = useState("png");
  const [Color,setColor] =useState("red");
  const ref = useRef(null);

  const [data,setData]=useState("https://jsmount.com")
  const [bgColor,setbgColor]=useState("blue")
  const [fgColor,setfgColor]=useState("yellow")
  const [eyeColor,seteyeColor]=useState("red")
  const [titleColor,setitleColor]=useState("red")
  const [title,setitle]=useState("red")
 const [centerImageSrc,setcenterImageSrc]= useState("https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg")
  return (
    <div className="App">
      
      <div>
            <QrCodeStylingComponent
              data={data}
              bgColor={bgColor}
              fgColor={fgColor}
              eyeColor={eyeColor}
              titleColor={titleColor}
              title={title}
              centerImageSrc={centerImageSrc}
            ></QrCodeStylingComponent>
          </div>
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: "20px 0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20
  }
};
