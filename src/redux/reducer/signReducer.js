import { SIGN_UP_USERS } from "../action/actionTypes";

//signup reducer//
const signState = {
  newData: [
    {
      firstName: "",
      email: "",
      password: "",
    },
  ],
};

export const SignUpReducer = (state = signState, actions) => {
  switch (actions.type) {
    case SIGN_UP_USERS:
      const { id, users } = actions.payload;
      return {
        ...state,
        newData: [
          ...state.newData,
          {
            id: id,
            users: users,
          },
        ],
      };
    default:
      return state;
  }
};
