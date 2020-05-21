
import React from 'react';

function FooterMenu(props) {

  const clicked = () => {
    console.log('Bottom click on item: "' + props.item + '"');
    props.clickedItem3(props.item);
  }

  return (
    <div class="col-sm">
      <div>
        <h6 class="bottomMenuItem" onClick={clicked}>
          {props.item}
        </h6>
      </div>
    </div>
  );
}

export default FooterMenu;
