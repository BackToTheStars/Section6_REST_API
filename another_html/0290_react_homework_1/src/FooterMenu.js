
import React from 'react';

function FooterMenu(props) {
  return (
    <div class="col-sm">
      <div>
        <h6>
          {props.item}
        </h6>
      </div>
    </div>
  );
}

export default FooterMenu;
