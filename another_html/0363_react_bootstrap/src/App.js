import React, { useState } from 'react';
import ToDoCard from "./ToDoCard";

const taskArray = [
  { id: 123, name: 'Read to children', priority: 10, status: 'todo'},
  { id: 124, name: 'Check bank', priority: 20, status: 'inProgress'},
  { id: 125, name: 'Plan next week', priority: 30, status: 'review'},
  { id: 126, name: 'Quality control', priority: 40, status: 'done'}
]

function App() {

  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm]         = useState(false);
  // определяет, какую группу кнопок показывать наверху
  const [taskInput, setTaskInput]                               = useState('');
  // название таски
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
  // горит ли кнопка создать таску
  const [tasks, setTasks]                                       = useState(taskArray);

  const openCreateTaskForm = () => {  // меняет группу кнопок наверху
    setIsOpenCreateTaskForm(true);
  };
  const onTaskChange = (e) => {      // вводит имя таски в инпуте
    setIsActiveButtonTaskCreate(e.target.value.length > 4);
    setTaskInput(e.target.value);
  };
  const taskSubmit = (e) => {        // нажата кнопки "создать таску"
    e.preventDefault();
    let tempTasks = [...tasks];
    tempTasks.push({ id: Math.random(), name: taskInput, priority: 10, status: 'todo'});
    setTasks(tempTasks);
    taskReset();
  };
  const taskReset = () => {          // сбросить весь верх в начальное положение
    setTaskInput('');
    setIsOpenCreateTaskForm(false);
    setIsActiveButtonTaskCreate(false);
  };
  const filterTasks = (status) => {
    let filterTasks = [...tasks];
    filterTasks = filterTasks.filter(el => el.status === status);
    return filterTasks;
  }

  return (
    <div>
      <div className="container">
        <h1>Kanban</h1>

        {!isOpenCreateTaskForm &&
        <button className="btn btn-primary" onClick={openCreateTaskForm}>Create
          Task</button>
        }

        {isOpenCreateTaskForm &&
        <form>
          <div className="form-group">
            <input type="text" className="form-control"
                   value={taskInput}
                   onChange={onTaskChange} />
          </div>
          <button type="submit" className="btn btn-primary"
                  onClick={taskSubmit}
                  disabled={!isActiveButtonTaskCreate}>Submit
          </button>
          <button className="btn btn-secondary"
                  onClick={taskReset}
          >Cancel
          </button>
        </form>
        }
        <p></p>
        <div className="row">
          <div className="col-sm">
            <h4>To do</h4>
            {filterTasks('todo').map(el => <ToDoCard task={el} key={el}/>)}
          </div>
          <div className="col-sm">
            <h4>In progress</h4>
            {filterTasks('inProgress').map(el => <ToDoCard task={el} key={el}/>)}
          </div>
          <div className="col-sm">
            <h4>Review</h4>
            {filterTasks('review').map(el => <ToDoCard task={el} key={el}/>)}
          </div>
          <div className="col-sm">
            <h4>Done</h4>
            {filterTasks('done').map(el => <ToDoCard task={el} key={el}/>)}
          </div>
        </div>

      </div>
    </div>
  );
}
export default App;