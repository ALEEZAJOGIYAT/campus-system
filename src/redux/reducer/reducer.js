import { ADD_USER, SIGN_UP_USERS } from "../action/actionTypes";

const initialState = {
  data: [
    {
      email: "alizajogyat09@gmail.com",
      password: "jogi,.abcd",
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
            // userEmail: userEmail,
            // userPassword: userPassword,
          },
        ],
      };
    default:
      return state;
  }
};


//signup reducer//
const signState={
  newData:[
    {
      firstName='',
      email:'',
      password:''
    }
  ]
}

// const SignUpReducer=(state=signState,actions)=>{
//   switch (actions.type) {
//   case SIGN_UP_USERS:
//       return{
//         ...state,
//       }
//       default:
//         export state;
//   }

// }