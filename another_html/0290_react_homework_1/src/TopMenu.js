
import React from 'react';

function TopMenu(props) {
  return (
    <div class="col-sm">
      <div>
        <h5>
          {props.item}
        </h5>
      </div>
    </div>
  );
}

export default TopMenu;
