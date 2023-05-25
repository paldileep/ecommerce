import { configureStore, combineReducers } from '@reduxjs/toolkit'
import signupReducer from './reducers/signupReducer'
import cartReducer from './reducers/cartReducer'
// this is for combining all the reducers into one 
const reducer = combineReducers({ 
    signup: signupReducer,
    cart: cartReducer
})

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// making the config file for persistReducer 
const persistConfig = { 
    key: 'root', 
    version: 1, 
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({ 
    reducer: persistedReducer,

    // was getting for something like 
    //VM169:1 A non-serializable value was detected in an action
    // so this remove it 
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),


})


