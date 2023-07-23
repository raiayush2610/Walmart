import React,{useState} from "react";
import QrCodeStylingComponent from "./QrCodeStylingComponent";
import QRCodeStyling from "qr-code-styling";



export default function QR1() {
//   const [url, setUrl] = useState("https://qr-code-styling.com");
//   const [fileExt, setFileExt] = useState("png");
//   const [Color,setColor] =useState("red");
//   const ref = useRef(null);

  const [data,setData]=useState("https://jsmount.com")
  const [bgColor,setbgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [fgColor,setfgColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [eyeColor,seteyeColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [titleColor,setitleColor]=useState(["white","black","yellow","green","blue","pink","violet"])
  const [title,setitle]=useState(["white","black","yellow","green","blue","pink","violet"])
 const [centerImageSrc,setcenterImageSrc]= useState("https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg")
//  console.log(bgColor[1]);
  return (
    <div className="App">
      <h1>hello</h1>
      <div>
            <br/>
            <QrCodeStylingComponent
              data={bgColor[0]}
              bgColor={bgColor[0]}
              fgColor={fgColor[1]}
              eyeColor={eyeColor[1]}
              titleColor={titleColor[4]}
              title={title[5]}
              centerImageSrc={centerImageSrc}
            ></QrCodeStylingComponent>
            <br/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
            <hr/>
             <QrCodeStylingComponent
              data={data}
              bgColor={bgColor[0]}
              fgColor={fgColor[1]}
              eyeColor={eyeColor[1]}
              titleColor={titleColor[4]}
              title={title[5]}
              centerImageSrc={centerImageSrc}
            ></QrCodeStylingComponent>
          </div>
    </div>
  );
}


