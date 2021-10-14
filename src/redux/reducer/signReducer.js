import { SIGN_UP_USERS } from "../action/actionTypes";

//signup reducer//
const initialState = {
  newData: {
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  },

  authenticated: false,
};

export const SignUpReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SIGN_UP_USERS:
      const { id, users } = actions.payload;
      return {
        ...state,
        newData: {
          id: id,
          users: users,
        },
        authenticated: true,
      };
    default:
      return state;
  }
};
