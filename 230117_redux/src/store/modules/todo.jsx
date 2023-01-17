const initState = {
  list: [
    { id: 0, text: '리액트 공부하기', done: false },
    { id: 1, text: '척추펴기', done: false },
    { id: 2, text: '취업하기', done: false },
  ],
};

let counts = initState.list.length;
initState['nextID'] = counts;

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

export function create(payload) {
  return {
    type: CREATE,
    payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id,
  };
}

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };
    case DONE:
      return {
        ...state,
        list: state.list.map((e) => {
          return e.id === action.id ? { ...e, done: true } : e;
        }),
      };
    default:
      return state;
  }
}
