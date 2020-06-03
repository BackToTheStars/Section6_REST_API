import React, { useState } from 'react';
const tasks1 = {
  todo: [],
  progress: [],
  review: [],
  done: [],
};
const boardOrder = [123, 3234, 43234]
const statuses = {
  s1: {name : 'TODO'},
  s5: {name : 'QA'},
}
const tasks2 = [
  {
    id: 123,
    name: 'Create F1',
    priority: 10,
    status: 's1'
  },
  // <--
  {
    name: 'Create F2',
    priority: 20,
    status: 's5'
  } ,
  {
    name: 'Create F2',
    priority: 20,
    status: 'done'
  } ,
  {
    name: 'Create F3',
    priority: 30,
    status: 'todo'
  }
]
function App() {
  const [isOpenCreateTaskForm, setIsOpenCreateTaskForm] = useState(false);
  const [taskInput, setTaskInput] = useState('');
  const [isActiveButtonTaskCreate, setIsActiveButtonTaskCreate] = useState(false);
  const openCreateTaskForm = () => {
    setIsOpenCreateTaskForm(true);
  };
  const onTaskChange = (e) => {
    setIsActiveButtonTaskCreate(e.target.value.length > 4);
    setTaskInput(e.target.value);
  };
  const taskSubmit = (e) => {
    e.preventDefault();
    console.log(taskInput);
    taskReset();
  };
  const taskReset = () => {
    setTaskInput('');
    setIsOpenCreateTaskForm(false);
    setIsActiveButtonTaskCreate(false);
  };
  return (
    <div>
      <div className="container">
        <h1>Kanban</h1>
        {!isOpenCreateTaskForm &&
        <button className="btn btn-primary" onClick={openCreateTaskForm}>Create
          Task</button>}
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
        <div className="row">
          <div className="col-sm">
            To do
          </div>
          <div className="col-sm">
            In progress
          </div>
          <div className="col-sm">
            Review
          </div>
          <div className="col-sm">
            Done
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;