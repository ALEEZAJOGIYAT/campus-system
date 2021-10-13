import { APPLY_JOBS } from "../action/actionTypes";

const initialState = {
  data: [],
};

export const applyJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_JOBS:
      const { id, details } = action.payload;
      //   let items=state.data
      //   let info=items.forEach((items)=> items.id===action.payload.id)
      return {
        ...state.data,
        data: [
          ...state.data,
          {
            id: id,
            details: details,
          },
        ],
      };
    default:
      return state;
  }
};
