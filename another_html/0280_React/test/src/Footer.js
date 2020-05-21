
import React from "react";

function Footer(props) {
  return (
    <div>
      <div>This is a Footer {props.v}</div>
      <input type="text" onChange={(e) => {
        props.resultText(e.target.value);
      }} />
    </div>
  );
}

export default Footer;
