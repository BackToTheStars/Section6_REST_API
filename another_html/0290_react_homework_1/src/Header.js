
import React from 'react';

import TopMenu from './TopMenu'

function Header(props) {
  return (
    <div class="header">
      <div class="row">
        {props.topMenu.map(el => <TopMenu key={el} item={el} />)}
      </div>
    </div>
  );
}

export default Header;
