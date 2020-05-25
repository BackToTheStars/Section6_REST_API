
import React from 'react';

function TopMenu(props) {

  const clicked = () => {
    console.log('Top click on item: "' + props.item + '"');
    props.clickedItem1(props.item);
  }

  return (
    <div class="col-sm">
      <div>
        <h5 class="topMenuItem" onClick={clicked}>
          {props.item}
        </h5>
      </div>
    </div>
  );
}

export default TopMenu;
