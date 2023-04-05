export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';

export const addUser = user => {
  return {
    type: ADD,
    payload: user,
  };
};
export const deleteUser = userId => {
  return {
    type: DELETE,
    payload: userId,
  };
};
