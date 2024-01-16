import { GET_POST } from "../reducerKeys";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST:
      return [...payload];

    default:
      return state;
  }
};
