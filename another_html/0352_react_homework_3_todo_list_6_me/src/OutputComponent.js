import React from 'react';


// ******  Redux
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, changeTask, doneTask } from "./actions";



function OutputComponent(props) {

  const tasks = useSelector(state => state.tasks); // Redux
  const dispatch = useDispatch(); // Redux


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


      {/*Redux*/}
      <br />
      <ul>
        {tasks.map(el =>
          <li key={el.id}>{el.name}{el.isDone===true ? "✅" : null}
            <button onClick={() => dispatch(doneTask(el.id))}>
              {el.isDone ? "Undone" : "Done"}
            </button>
            <button onClick={() => dispatch(deleteTask(el.id))}>
              Delete</button>

          </li>
        )}
      </ul>
      {/*Add change task*/}


    </div>
  );
}

export default OutputComponent;