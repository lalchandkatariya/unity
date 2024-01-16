import { GET_POST } from "../reducerKeys";

export const getPosts = (payload) => ({
  type: GET_POST,
  payload,
});
