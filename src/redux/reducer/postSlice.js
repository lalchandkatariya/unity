// import { createSlice } from "@reduxjs/toolkit";
// import { Get_Post_Api } from "../api/api";

// const initialState = [];

// const postSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     getPost(state, action) {
//       console.log("state, action", state, action);
//       //   (
//       //     async function post() {
//       //     const data = await fetch(Get_Post_Api, {});
//       //     const post = await data.json();
//       //     console.log("post", Array.isArray(post));
//       //     const lal = [3, 4];
//       //     state.push(...lal);
//       //   }
//       //   )();
//       // fetch(Get_Post_Api)
//       //   .then((res) => res.json())
//       //   .then((res) => state.push(...res));
//     },
//   },
//   //   reducers: (create) => ({
//   //     getPost: create.asyncThunk(async () => {
//   //       const data = await fetch(Get_Post_Api);
//   //       return await res.json();
//   //     }),
//   //   }),
// });

// export const { getPost } = postSlice.actions;

// export default postSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Get_Post_Api } from "../api/api";

const initialState = {
  status: "uninitialized",
  todos: [],
  error: null,
};

const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  // Just make the async request here, and return the response.
  // This will automatically dispatch a `pending` action first,
  // and then `fulfilled` or `rejected` actions based on the promise.
  // as needed based on the
  const res = await axios.get(Get_Post_Api);
  console.log("res_____", res);
  return res.data;
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // any additional "normal" case reducers here.
    // these will generate new action creators
  },
  extraReducers: (builder) => {
    // Use `extraReducers` to handle actions that were generated
    // _outside_ of the slice, such as thunks or in other slices
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      // Pass the generated action creators to `.addCase()`
      .addCase(fetchTodos.fulfilled, (state, action) => {
        // Same "mutating" update syntax thanks to Immer
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.todos = [];
        state.error = action.error;
      });
  },
});

export default todosSlice.reducer;
