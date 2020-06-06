import React from 'react';
import './App.css'

function ToDoCard(props) {
  return (
    <div>
      <div className="kanbanCard">
      <div className="card">
        <div className="card-body">
            <h4>{props.task.name}</h4>
            {/*<p>{props.task.priority}</p>*/}
            <div className="btn-group btn-group-sm" role="group" aria-label="up down">
              <button type="button" className="btn btn-secondary"
                      onClick={() => props.moveY(props.task.id, props.task.priority, -1, props.task.status)}
                      //disabled={props.task.priority===0}
              >↑</button>
              <button type="button" className="btn btn-secondary"
                      onClick={() => props.moveY(props.task.id, props.task.priority, 1, props.task.status)}
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
            <span>   </span>
            <div className="btn-group btn-group-sm" role="group" aria-label="edit delete">
              <button type="button" className="btn btn-secondary"
                      onClick={() => null}
                      disabled={null}
              >🖉</button>
              <button type="button" className="btn btn-secondary"
                      onClick={() => null}
                      disabled={null}
              >✕</button>
            </div>


        </div>
      </div>
      </div>
    </div>
  )
}
export default ToDoCard;

