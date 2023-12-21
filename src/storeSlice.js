import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    name: 1,
    visible:true,
    rotate_model:{}
  },
  reducers: {
    change_name:(state,action)=>{
      state.name=action.payload
    },
    change_visible:(state,action)=>{
       state.visible=!state.visible
    },
    change_model:(state,action)=>{
      state.rotate_model=action.payload
   },

  },
})

// Action creators are generated for each case reducer function
export const { change_name,change_visible,change_model } = counterSlice.actions

export default counterSlice.reducer