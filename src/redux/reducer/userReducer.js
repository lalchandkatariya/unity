import { ADD_USER, DELETE_USER, GET_USERS, UPDATE_USER } from "../reducerKeys";

const initialState = [];

export default (state = initialState, { type, payload }) => {//console.log("payload.willDeleteIndex", payload?.willDeleteIndex)
  switch (type) {

    case GET_USERS:
      return [...state, ...payload]

    case UPDATE_USER:
      return state.map((item, index)=>index==payload.willUpdateIndex ? payload.data:item)

    case ADD_USER:
      //console.log("ADD_USER", payload)
      return [...state, payload];

    case DELETE_USER:
      return state.filter((item,index)=>String(index)!==String(payload.willDeleteIndex));

    default:
      return state;
  }
};
