
import React from 'react';

import FooterMenu from "./FooterMenu";

function Footer(props) {

  const clickedItemFooterMenu = (data) => {
    props.clickedItem4(data);
  }

  return (
    <div class="footer">
      <div class="row">
          {props.footerMenu.map(el => <FooterMenu key={el} item={el} clickedItem3={clickedItemFooterMenu}/>)}
      </div>
    </div>
  );
}

export default Footer;
