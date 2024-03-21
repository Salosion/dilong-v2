import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state) => {
      state.id += 1
    },
  },
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer
