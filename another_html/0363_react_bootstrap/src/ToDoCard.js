import React from 'react';

function ToDoCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4>{props.task.name}</h4>
          <div className="btn-group btn-group-sm" role="group" aria-label="up down">
            <button type="button" className="btn btn-secondary"
                    onClick={() => props.moveY(props.task.priority, -1)}
                    //disabled={props.task.priority===0}
            >↑</button>
            <button type="button" className="btn btn-secondary"
                    onClick={() => props.moveY(props.task.priority, 1)}
                    //disabled={props.task.priority===props.maxPriority-1}
            >↓</button>
          </div>
          <span>   </span>
          <div className="btn-group btn-group-sm" role="group" aria-label="left right">
            <button type="button" className="btn btn-secondary"
                    onClick={() => props.moveX(props.task.id, -1)}
                    disabled={props.task.status===1}
            >←</button>
            <button type="button" className="btn btn-secondary"
                    onClick={() => props.moveX(props.task.id, 1)}
                    disabled={props.task.status===4}
            >→</button>
          </div>

        </div>
      </div>
    </div>
  )
}
export default ToDoCard;