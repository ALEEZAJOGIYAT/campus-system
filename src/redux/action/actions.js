import { ADD_USER, SIGN_UP_USERS } from "../action/actionTypes";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      id: new Date().getTime().toString(),
      user: user,
      // userEmail: userEmail,
      // userPassword: userPassword,
    },
  };
};

export const signUpUsers = (users) => {
  return {
    type: SIGN_UP_USERS,
    payload: {
      id: new Date().getTime().toString(),
      users: users,
    },
  };
};
