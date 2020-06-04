import React from 'react';

function ToDoCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          {props.task.name}
        </div>
      </div>
    </div>
  )
}
export default ToDoCard;