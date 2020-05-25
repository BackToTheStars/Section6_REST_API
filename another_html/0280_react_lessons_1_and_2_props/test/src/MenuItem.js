
import React from "react";

function MenuItem(props) {
  return (
    <li className='menu-item'>
        {props.item}
        Это я MenuItem
    </li>
  );
}

export default MenuItem;
