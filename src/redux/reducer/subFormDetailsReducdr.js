import { ADD_SUB_FORM_DETAILS } from "../reducerKeys"

const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD_SUB_FORM_DETAILS:
    return { ...state, ...payload }

  default:
    return state
  }
}
