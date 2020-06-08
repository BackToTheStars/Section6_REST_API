import React from 'react';
import TaskCard from "./TaskCard";

function Column(props) {
  return (
    <div>
      {props.tasks
        .filter(el => el.status === props.status)
        .sort((a, b) => a.priority - b.priority)
        .map(el => <TaskCard
          key={el.id}
          task={el}
          changeStatus={props.changeStatus}
          onTaskSave={props.onTaskSave}
        />)}
    </div>
  );
}

export default Column;
