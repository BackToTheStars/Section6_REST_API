import React, {useState} from 'react';
import './App.css';
import Column from "./Column";
import { v4 as uuidv4 } from 'uuid';

const taskArray = [
  { id: uuidv4(), name: 'Read to children', priority: 0, status: 'todo'},
  { id: uuidv4(), name: 'Check bank', priority: 1, status: 'progress'},
  { id: uuidv4(), name: 'Plan next week', priority: 2, status: 'review'},
  { id: uuidv4(), name: 'Quality control', priority: 3, status: 'review'}
]

//const colors     = ['violet', 'red', 'yellow', 'green'];

function App() {

  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm]         = useState(false);
  // определяет, какую группу кнопок показывать наверху
  const [taskInput, setTaskInput]                               = useState('');
  // название таски
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
  // горит ли кнопка создать таску
  const [tasks, setTasks]                                       = useState(taskArray);

  const openCreateTaskForm = () => {     // меняет группу кнопок наверху
    setIsOpenCreateTaskForm(true);
  };
  const onTaskChange = (e) => {          // вводит имя задачи в инпуте
    setIsActiveButtonTaskCreate(e.target.value.length > 4);
    setTaskInput(e.target.value);
  };
  const taskSubmit = (e) => {            // нажата кнопки "создать таску"
    e.preventDefault();
    let copyTasks = [...tasks];
    copyTasks.push({ id: uuidv4(), name: taskInput, priority: 2, status: 'todo'});
    setTasks(copyTasks);
    taskReset();
  };
  const taskReset = () => {              // сбросить весь верх в начальное положение
    setTaskInput('');
    setIsOpenCreateTaskForm(false);
    setIsActiveButtonTaskCreate(false);
  };

  const changeStatus = ({id, direction}) => {
    const statuses = ['todo', 'progress', 'review', 'done'];
    const priorities = [0, 1, 2, 3];
    let updatedTasks = tasks;

    if (direction==='delete') updatedTasks = updatedTasks.filter(el => el.id !== id);

    updatedTasks = updatedTasks.map(el => {
      if (el.id===id) {
        if (direction==='left')  el.status   = statuses[statuses.indexOf(el.status)-1];
        if (direction==='right') el.status   = statuses[statuses.indexOf(el.status)+1];
        if (direction==='up')    el.priority = priorities[priorities.indexOf(el.priority)-1];
        if (direction==='down')  el.priority = priorities[priorities.indexOf(el.priority)+1];
        return el;
      }
      else return el;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="container">
        <h1 className="mb-3">Kanban Board</h1>

        {!isOpenCreateTaskForm &&
        <button className="btn btn-primary" onClick={openCreateTaskForm}>New Task</button>
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
          <button className="btn btn-secondary mx-2"
                  onClick={taskReset}
          >Cancel
          </button>
        </form>
        }
        <div className="row mt-3">
          <div className="col-sm greyColumn mr-2">
            <h4 className="mt-3 mb-3">To Do</h4>
            <Column tasks={tasks} status={'todo'} changeStatus={changeStatus}/>
          </div>
          <div className="col-sm greyColumn mr-2 ml-2">
            <h4 className="mt-3 mb-3">In Progress</h4>
            <Column tasks={tasks} status={'progress'} changeStatus={changeStatus}/>
          </div>
          <div className="col-sm greyColumn mr-2 ml-2">
            <h4 className="mt-3 mb-3">Review</h4>
            <Column tasks={tasks} status={'review'} changeStatus={changeStatus}/>
          </div>
          <div className="col-sm greyColumn mr-2 ml-2">
            <h4 className="mt-3 mb-3">Done</h4>
            <Column tasks={tasks} status={'done'} changeStatus={changeStatus}/>
          </div>
        </div>
      </div>
    </div>
  );





}

export default App;
