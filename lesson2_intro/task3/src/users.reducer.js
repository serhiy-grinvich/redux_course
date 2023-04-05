import { ADD, DELETE } from './users.actions';

const initialState = { usersList: [] };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      //   console.log('add', action);
      return { ...state, usersList: state.usersList.concat(action.payload) };
    case DELETE:
      //   console.log('delete', action);
      return { ...state, usersList: state.usersList.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
};
