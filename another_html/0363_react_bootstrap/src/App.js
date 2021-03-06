import React, { useState } from 'react';
import ToDoCard from "./ToDoCard";

const taskArray = [
  { id: 123, name: 'Read to children', priority: 0, status: 1},
  { id: 124, name: 'Check bank', priority: 1, status: 2},
  { id: 125, name: 'Plan next week', priority: 2, status: 3},
  { id: 126, name: 'Quality control', priority: 3, status: 4}
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
    tempTasks.push({ id: Math.random(), name: taskInput, priority: 0, status: 1});
    setTasks(tempTasks);
    taskReset();
  };
  const taskReset = () => {          // сбросить весь верх в начальное положение
    setTaskInput('');
    setIsOpenCreateTaskForm(false);
    setIsActiveButtonTaskCreate(false);
  };
  const filterTasks = (status) => {  // фильтрует, что показывать в данном столбце
    let filterTasks = [...tasks];
    filterTasks = filterTasks.filter(el => el.status === status);
    return filterTasks;
  }
  const moveX = (id, x) => {         // двигает таски по оси Х
    let tempTasks = [...tasks];
    let tempTask = tempTasks.filter(el => el.id === id)[0];
    if (tempTask.status > 1 || tempTask.status < 4) tempTask = {...tempTask, status: tempTask.status+x};
    tempTasks = tempTasks.filter(el => el.id !== id);
    tempTasks.push(tempTask);
    tempTasks = tempTasks.map((e, i) => e = {...e, priority: i});
    setTasks(tempTasks);
    //console.log(tempTasks);
  }
  const moveY = (id, i, y, s) => {    // двигает таски по оси Y
    let tempTasks = [...tasks];
    let tempTasks2 =[];
    for (let index=1; index<=4; index++) {
      let element = tempTasks.filter(e => e.status === index).map((e, i) => e = {...e, priority: i});
      element.map(e => tempTasks2.push(e))
    }
    tempTasks = tempTasks2.filter(e => e.status === s);
    for (let i=0; i<tempTasks.length; i++) {
      if (tempTasks[i].id === id) {
        let task = tempTasks.splice(i, 1)[0];      // remove `from` item and store it
        tempTasks.splice(i + y, 0, task);     // insert stored item into position `to`
        break;
      }
    }
    let tempTasks3 = tempTasks2.filter(e => e.status !== s);
    tempTasks.map((e, i) => tempTasks3.push(tempTasks[i]));
    tempTasks2 = [];
    for (let index=1; index<=4; index++) {
      let element = tempTasks3.filter(e => e.status === index).map((e, i) => e = {...e, priority: i});
      element.map(e => tempTasks2.push(e))
    }
    setTasks(tempTasks2);
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
            {filterTasks(1).map(el => <ToDoCard task={el} key={el.id} moveX={moveX} moveY={moveY} />)}
          </div>
          <div className="col-sm">
            <h4>In progress</h4>
            {filterTasks(2).map(el => <ToDoCard task={el} key={el.id} moveX={moveX} moveY={moveY} />)}
          </div>
          <div className="col-sm">
            <h4>Review</h4>
            {filterTasks(3).map(el => <ToDoCard task={el} key={el.id} moveX={moveX} moveY={moveY} />)}
          </div>
          <div className="col-sm">
            <h4>Done</h4>
            {filterTasks(4).map(el => <ToDoCard task={el} key={el.id} moveX={moveX} moveY={moveY} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;