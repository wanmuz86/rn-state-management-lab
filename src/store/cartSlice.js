import { createSlice } from "@reduxjs/toolkit"

const initialState = {
   // declare the state/states managed by the store 
  items: [], // each item: { id, name, price }
}

// the actions/methods that will change the value of the store
const cartSlice = createSlice({

  name: "cart",
  initialState,    //state and the initial values
  reducers: {
    // all the methods/actions that will change the value of state

    addItem(state, action) {
      // action.payload: { id, name, price }
      // action.payload => whatver is passed by the component

      state.items.push(action.payload)
    },
    removeItem(state, action) {

      const id = action.payload
      // remove an item from a state based on the given id...
      // filter -> remove
      state.items = state.items.filter((item) => item.id !== id)
    },
    clearCart(state) {
        // empty the cart , the items array
      state.items = []
    },
  },
})
// export the actions -.> for the components
export const { addItem, removeItem, clearCart } = cartSlice.actions
// export the reducer / configuration file for the store
export default cartSlice.reducer
