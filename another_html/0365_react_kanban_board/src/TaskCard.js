import React from 'react';

const left = (<svg className="bi bi-arrow-left" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd"
        d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
  <path fillRule="evenodd" d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>);

const right = (<svg className="bi bi-arrow-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd"
        d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
</svg>);

const up = (<svg className="bi bi-arrow-up-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                 xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z"/>
  <path fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8 5.707 5.354 8.354a.5.5 0 1 1-.708-.708l3-3z"/>
</svg>);

const down = (<svg className="bi bi-arrow-down-short" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd"
        d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
  <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
</svg>);

function TaskCard(props) {
  return (
    <div className="card mb-3 mr-1 ml-1">
      {props.task.name}

      {props.task.status!=='todo' &&
        <span onClick={() => props.changeStatus({id: props.task.id, direction: 'left'})}
        >{left}</span>}

      {props.task.status!=='done' &&
        <span onClick={() => props.changeStatus({id: props.task.id, direction: 'right'})}
        >{right}</span>}

      {props.task.priority!==0 &&
      <span onClick={() => props.changeStatus({id: props.task.id, direction: 'up'})}
      >{up}</span>}

      {props.task.priority!==3 &&
      <span onClick={() => props.changeStatus({id: props.task.id, direction: 'down'})}
      >{down}</span>}

      {props.task.priority===0 &&
        <p className="urgent">urgent</p>
      }
      {props.task.priority===1 &&
        <p className="high">high</p>
      }
      {props.task.priority===2 &&
        <p className="medium">normal</p>
      }
      {props.task.priority===3 &&
        <p className="low">low</p>
      }
    </div>
  );
}

export default TaskCard;
