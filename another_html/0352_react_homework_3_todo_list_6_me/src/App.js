
import React, {useState} from 'react';
import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';


function App() {

  const[todos, setTodos] = useState([
    {name: 'First task', id: Math.random(), isDone: false}
  ]);

  const onCreateTask = (name) => {
    let tempTodos = [...todos];
    tempTodos.push({id: Math.random(), isDone: false, name: name});
    setTodos(tempTodos);
  };
  const onDeleteTask = (id) => {
    let tempTodos = [...todos];
    tempTodos = tempTodos.filter((el) => el.id !== id);
    setTodos(tempTodos);
  }
  
  const onToggleDone = (id) => {
    let tempTodos = [...todos];
    tempTodos = tempTodos.map(el => {
      if (el.id===id) return {...el, isDone: !el.isDone};
      else return el;
    });
    setTodos(tempTodos);
  }

  return (
    <div>
      <InputComponent
        onCreateTask={onCreateTask}
      />
      <OutputComponent
        todos={todos} //переменная
        onDeleteTask={onDeleteTask}
        onToggleDone={onToggleDone}
      />
    </div>
  );
}

export default App;
