
import React from "react";
import MenuItem from "./MenuItem";

function Header(props) {  // получение props
  return (
    <div>
      This is a Header {props.version} {props.menu}
      <ul>
          <li key='1'>{props.menu[0]}</li>
          <li key='2'>{props.menu[1]}</li>
          <li key='3'>{props.menu[2]}</li>
      </ul>
      <hr/>
      {props.menu.map(el => <li key={el}>{el}</li>)}

      <ul>
          {props.menu.map(el => <MenuItem key={el} item={el} />)}
      </ul>

    </div>

  );
}

export default Header;
