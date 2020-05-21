
import React from 'react';

import TopMenu from './TopMenu'

function Header(props) {

  const clickedItemTopMenu = (data) => {
    console.log('Top click "' + data + '" propagated 1 level up to Header');
    props.clickedItem2(data);
  }

  return (
    <div class="header">
      <div class="row">
          {props.topMenu.map(el => <TopMenu key={el} item={el} clickedItem1={clickedItemTopMenu}/>)}
      </div>
    </div>
  );
}

export default Header;
