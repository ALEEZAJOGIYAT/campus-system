import { ADD_USER } from "../action/actionTypes";

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
  authenticated: false,
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
        authenticated: true,
      };

    default:
      return state;
  }
};
