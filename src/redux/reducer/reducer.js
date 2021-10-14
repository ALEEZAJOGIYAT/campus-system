import { ADD_USER } from "../action/actionTypes";

const initialState = {
  data: {
    email: "",
    password: "",
    role: "",
  },
  authenticated: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const { id, user } = action.payload;
      return {
        ...state,
        data: {
          id: id,
          user: user,
        },
        authenticated: true,
      };

    default:
      return state;
  }
};
