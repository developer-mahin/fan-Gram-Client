import { createSlice } from "@reduxjs/toolkit";

export type TOrderState = {
  id: string | null;
};

const initialState: TOrderState = {
  id: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { setId } = orderSlice.actions;
export default orderSlice.reducer;
