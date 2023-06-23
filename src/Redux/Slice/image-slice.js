import { createSlice } from '@reduxjs/toolkit'

export const imageSlice = createSlice({
  name: 'images',
  initialState: {
    imgList:[] 
  },
  reducers: {
    addImages: (state , actions) => {
      state.imgList = actions.payload 
    }
  }
})

// Action creators are generated for each case reducer function
export const { addImages } = imageSlice.actions

export default imageSlice.reducer