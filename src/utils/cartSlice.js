import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // functions to manipulate on the cart slice
    addItem: (state, action) => {
      //Modify the state based on the action
      //Mutating the state
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      //For simplicity removing the last item
      state.items.pop();
    },
    clearCart: (state) => {
      // RTK(Redux Tool Kit) says either mutate the existing or return a new state
      state.items.length = 0;
      // or return {items:[]}; // This new object will be replaced inside original state = {items:[]};
    },
  },
});

// cartSlice is an object contains actions,reducer

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
