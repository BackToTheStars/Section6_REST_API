
const initialState = [
  {name: 'Redux State Zero Task', id: Math.random(), isDone: false}
];

const tasksReducer = (state = initialState, action) => {

  switch(action.type) {

    case 'CREATE': {
      return [...state,
        {id: Math.random(), isDone: false, name: action.name}];
    }

    case 'DONE': {
      state = state.map(el => {
        if (el.id === action.id) return {...el, isDone: !el.isDone};
        else return el;
      });
      return state;
    }

    case 'CHANGE':
      return 0;

    case 'DELETE': {
      state = state.filter((el) => el.id !== action.id);
      return state;
    }
    default:
      return state;
  }
}

export default tasksReducer;