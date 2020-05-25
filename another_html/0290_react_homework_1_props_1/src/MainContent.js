
import React from 'react';

function MainContent(props) {

  return (
    <div class="row">
      <div class="mainContent">
        <p>{props.mainContent}</p>
      </div>
    </div>
  );
}

export default MainContent;
