import React from 'react';

function OutputComponent(props) {
  return (
    <div>
      <ul>
        {props.todos.map(el =>
          <li key={el.id}>{el.name}{el.isDone===true ? "✅" : null}
            <button onClick={() => props.onToggleDone(el.id)}>
              {el.isDone ? "Undone" : "Done"}
            </button>
            <button onClick={() => props.onDeleteTask(el.id)}>
              Delete</button>

          </li>
        )}
      </ul>
    </div>
  );
}

export default OutputComponent;