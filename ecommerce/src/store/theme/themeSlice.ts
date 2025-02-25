import { createSlice } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

const initialState = {
  mode: "light", 
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

// const themePersistConfig = {
//   key: "theme",
//   storage,
// };

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer

// export default persistReducer(themePersistConfig, themeSlice.reducer);