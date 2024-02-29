import { createSlice } from "@reduxjs/toolkit";

export type TUserState = {
  celebrityId: string;
};

const initialState: TUserState = {
  celebrityId: "",
};

const celebritySlice = createSlice({
  name: "celebrity",
  initialState,
  reducers: {
    addCelebrityId: (state, action) => {
      state.celebrityId = action.payload;
    },
  },
});

export const { addCelebrityId } = celebritySlice.actions;
export default celebritySlice.reducer;
