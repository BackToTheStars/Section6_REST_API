import React from 'react';
import TaskCard from "./TaskCard";

function Column(props) {
  return (
    <div>
      {props.tasks
        .filter(el => el.status === props.status)
        .map(el => <TaskCard
          key={el.id}
          task={el}
          changeStatus={props.changeStatus} />)}
    </div>
  );
}

export default Column;
