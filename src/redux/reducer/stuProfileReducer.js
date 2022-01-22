import { STUDENT_PROFILE } from "../action/actionTypes";

const initialState = {
  data: [
    {
      role: "student",
    },
  ],
};

export const studentProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STUDENT_PROFILE:
      let newUser = state.data.filter((users) => users.role === "student");
      console.log("kjjd", newUser);
      return {
        ...state,
        data: [
          ...newUser,
          {
            user: action.payload.user,
          },
        ],
      };
    default:
      return state;
  }
};
