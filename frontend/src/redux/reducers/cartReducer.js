import { createSlice } from '@reduxjs/toolkit'

const cartReducer = createSlice({ 

      name: 'cart', 
      initialState: '',
      reducers: { 
          addToCart(state, action){
            return state = action.payload
          }
      }
})

export const { addToCart } = cartReducer.actions

export default cartReducer.reducer