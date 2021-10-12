import axios from "axios";

import {
  ADD_USER,
  DELETE_JOBS,
  POST_JOBS,
  SIGN_UP_USERS,
} from "../action/actionTypes";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: {
      id: new Date().getTime().toString(),
      user: user,
    },
  };
};

//signup actions//
export const signUpUsers = (users) => {
  return {
    type: SIGN_UP_USERS,
    payload: {
      id: new Date().getTime().toString(),
      users: users,
    },
  };
};

//POST JOB ACTION

export const postJob = (details) => {
  return {
    type: POST_JOBS,
    payload: {
      id: new Date().getTime().toString(),
      details: details,
    },
  };
};

export const deleteJobs = (id) => {
  return {
    type: DELETE_JOBS,
    id,
  };
};
