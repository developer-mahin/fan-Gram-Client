/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export type TGlobalState = {
  isModalOpen: boolean;
  wishList: any;
};

const initialState: TGlobalState = {
  isModalOpen: false,
  wishList: [],
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    addToWishList: (state, action) => {
      state.wishList.push(action.payload);
      toast.success("Added into wishlist");
      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeFromWishlist: (state, action) => {
      console.log(action.payload);

      state.wishList = state.wishList.filter(
        (data: any) => data.id !== action.payload
      );

      localStorage.getItem("wishlist");
    },
  },
});

export const { setIsModalOpen, addToWishList, removeFromWishlist } =
  globalSlice.actions;
export default globalSlice.reducer;
