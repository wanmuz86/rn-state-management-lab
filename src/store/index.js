import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

export const store = configureStore({
  //store to store the cart based on the configuration on cartReducer
  reducer: {
    cart: cartReducer,
  },

  // if you want to do loggingm you can define the middleware here
})
