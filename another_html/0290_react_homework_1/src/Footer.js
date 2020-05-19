
import React from 'react';

import FooterMenu from "./FooterMenu";

function Footer(props) {
  return (
    <div class="footer">
      <div class="row">
          {props.footerMenu.map(el => <FooterMenu key={el} item={el} />)}
      </div>
    </div>
  );
}

export default Footer;
