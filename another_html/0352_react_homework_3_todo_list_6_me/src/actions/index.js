
// нельзя мешать в одну кучу имена name, payload, id и т.п.

export const createTask = (name) => {
  return {
    type: 'CREATE',
    name: name
  };
};

export const doneTask = (id) => {
  return {
    type: 'DONE',
    id: id
  };
};

export const changeTask = (task) => {
  return {
    type: 'CHANGE',
    payload: task
  };
};

export const deleteTask = (id) => {
  return {
    type: 'DELETE',
    id: id
  };
};

