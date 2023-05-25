import { createSlice } from "@reduxjs/toolkit";

// import { createAsyncThunk } from "@reduxjs/toolkit";

// const fetchCart = createAsyncThunk('fetchCart', async (productId)=>{
    
//         const response = await axios.get(`http://localhost:5000/products/product/?productId=${productId}`)
//         response.json()
// })

const signupReducer = createSlice({ 
        name: 'signup',
        initialState: '',
        reducers: { 
            signup(state, action){

              localStorage.setItem('token', action.payload.token)

              console.log(action.payload)

              return state = action.payload
            },
            logout(state){ 

              localStorage.removeItem('token')

              return state = ''
            }
        }

})

export const signupState = state => state.signup.user

export const { signup, logout } = signupReducer.actions

export default signupReducer.reducer