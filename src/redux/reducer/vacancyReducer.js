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
    case DELETE_JOBS:
      const item = state.data.filter(
        (element) => element.id !== action.payload.id
      );
      // console.log("item", item);
      return {
        ...state,
        data: [...item],
      };

    default:
      return state;
  }
};
