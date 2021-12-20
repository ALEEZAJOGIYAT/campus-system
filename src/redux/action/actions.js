import {
  ADD_USER,
  APPLY_JOBS,
  COMPANY,
  DELETE_JOBS,
  POST_JOBS,
  SIGN_UP_USERS,
  STUDENT_PROFILE,
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

//Company

export const company = (user, id) => {
  return {
    type: COMPANY,
    payload: {
      user: user,
    },
  };
};

//student profile
export const studentProfile = (user, id) => {
  return {
    type: STUDENT_PROFILE,
    payload: {
      user: user,
    },
  };
};

//company profile

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
    payload: {
      id,
    },
  };
};

export const applyJobs = (details, id) => {
  return {
    type: APPLY_JOBS,
    payload: {
      id,
      details: details,
    },
  };
};
