import { DELETE_JOBS, POST_JOBS } from "../action/actionTypes";

const initialState = {
  data: [],
};

export const vacancyReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_JOBS:
      const { id, details } = action.payload;
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: id,
            details: details,
          },
        ],
      };
    // case DELETE_JOBS:
    //   const items = state.data.filter((info) => info.id !== action.payload.id);
    //   return {
    //     ...state,
    //     data: [...items],
    //   };
    default:
      return state;
  }
};
