import { ADD_USER, SIGN_UP_USERS } from "../action/actionTypes";

const initialState = {
  data: [
    {
      stuEmail: "alizajogyat09@gmail.com",
      stupassword: "homeplace1234",
      stuRole: "student",
    },
    {
      email: "sanaafzal12@gmail.com",
      password: "home123",
      role: "company",
    },
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      const { id, user } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: id,
            user: user,
          },
        ],
      };

    default:
      return state;
  }
};

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
        data: [
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
