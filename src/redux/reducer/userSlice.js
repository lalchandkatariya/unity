import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser(state, action) {
      console.log("state from getuser", state);
      const { type, payload } = action;
      console.log("data", payload, type, action);
      console.log("state ", state.users, [...payload]);
      state.push(...payload);
      // state.push(payload)
    },
    addUser(state, action) {
      const { type, payload } = action;
      state.push(payload);
    },
    updateUser(state, action) {
      const { type, payload } = action;
    },
    deleteUser(state, action) {
      const { type, payload } = action;
    },
  },
});

export const { getUser, addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
