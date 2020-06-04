import React from 'react';

function ToDoCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4>{props.task.name}</h4>
          <div className="btn-group btn-group-sm" role="group" aria-label="up down">
            <button type="button" className="btn btn-secondary">↑</button>
            <button type="button" className="btn btn-secondary">↓</button>
          </div>
          <span>   </span>
          <div className="btn-group btn-group-sm" role="group" aria-label="left right">
            <button type="button" className="btn btn-secondary" >←</button>
            <button type="button" className="btn btn-secondary"
                    onClick={() => props.moveRight(props.task.id)}>→</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ToDoCard;