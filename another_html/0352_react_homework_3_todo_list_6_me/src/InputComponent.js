import React, {useState} from 'react';

function InputComponent(props) {

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
          Add Task</button>
    </div>
  );
}

export default InputComponent;