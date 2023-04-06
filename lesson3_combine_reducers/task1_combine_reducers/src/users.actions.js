export const ADD = 'USERS/ADD';
export const DELETE = 'USERS/DELETE';
export const UPDATE = 'USERS/UPDATE';

export const addUser = userData => {
  return {
    type: ADD,
    payload: { userData },
  };
};
export const deleteUser = userId => {
  return {
    type: DELETE,
    payload: { userId },
  };
};

export const updateUser = (userId, userData) => {
  return {
    type: UPDATE,
    payload: {
      userId,
      userData,
    },
  };
};
