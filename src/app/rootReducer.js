import { combineReducers } from '@reduxjs/toolkit'
import { productSlice } from '../entities/product'

export const rootReducer = combineReducers({
  [productSlice.name]: productSlice.reducer,
})
