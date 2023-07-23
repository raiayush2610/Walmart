import QRCodeStyling from "qr-code-styling";
import React, { useEffect, useRef } from "react";

// Below is QR Code stying object with default attributes
// We can also pass these all attributes as a props for different different uses, colors and data
const qrCode = new QRCodeStyling({
  width: 250,
  height: 250,
  margin: 10,
  image: "",
  dotsOptions: {
    color: "white",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 10,
  },
  backgroundOptions: {
    color: "yellow",
  },
  cornersSquareOptions: {
    color: "black",
  },
});

export default function QrCodeStylingComponent(props) {
  const ref = useRef(null);

  useEffect(() => {
    const options = qrCode._options;
    options.cornersSquareOptions.color = props.eyeColor;
    options.image = props.centerImageSrc;
    options.backgroundOptions.color = props.bgColor;
    options.dotsOptions.color = props.fgColor;
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: props.data,
    });
  }, [props.data]);

  return (
    // This is outer div which have some dynamic styles based on props, you can remove this div if you dont need any parent div.
    <div
      style={{
        backgroundColor: props.bgColor && props.bgColor,
        display: "inline-block",
      }}
    >
      {/* Below div is most important, where canvas will be rendered of QR code*/}
      <div ref={ref}>{console.log(ref)}</div>

      {/* Below title is optional, if you dont need it you can remove this one. */}
      <p style={{ color: props.titleColor || "white", textAlign: "center" }}>
        {props.title || "JS Mount"}
      </p>
    </div>
  );
}