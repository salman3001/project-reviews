import { configureStore } from "@reduxjs/toolkit";
// Import your reducers
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    // Add more reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
