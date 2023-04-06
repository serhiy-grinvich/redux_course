import { ADD, DELETE, UPDATE } from './users.actions';

const initialState = { usersList: [] };

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      //   console.log('add', action);
      return { ...state, usersList: state.usersList.concat(action.payload.userData) };
    case DELETE:
      const newUsersList = state.usersList.filter(user => user.id !== action.payload.userId);
      //   console.log('delete', action);
      return { ...state, usersList: newUsersList };
    case UPDATE: {
      const newUsersList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return { ...user, ...action.payload.userData };
        }
        return user;
      });
      return { ...state, usersList: newUsersList };
    }
    default:
      return state;
  }
};
