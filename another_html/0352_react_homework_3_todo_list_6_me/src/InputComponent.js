import React, {useState} from 'react';


// ******  Redux
import { useSelector, useDispatch } from "react-redux";
import { createTask } from "./actions";


function InputComponent(props) {

  const tasks = useSelector(state => state.tasks); // Redux
  const dispatch = useDispatch(); // Redux

  const [task, setTask] = useState('');

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onSubmit={()=>{ props.onCreateTask(task); setTask("")}}
      />
      <button onClick={() => { props.onCreateTask(task); setTask("")}}>
        Add Task
      </button>


      {/*Redux*/}
      <br />
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onSubmit={()=>{ dispatch(createTask(task)); setTask("")}}
      />
      <button onClick={() => { dispatch(createTask(task)); setTask("")}}>
        Add task to Redux State
      </button>
      {/*сделать task name тоже через State Reducer*/}

    </div>
  );
}

export default InputComponent;