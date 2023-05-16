import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',

  initialState:{
    value:null, 
  },

  reducers: {   //this is a pure function in js...create 2 action
    signin: (state, action) => {
      
      state.value=action.payload
    },
    signout: (state) => {
      state.value =null
    },
   
  },
});

export const { signin, signout } = userSlice.actions; 

export const selectUser = (state) => state.user.value; //selectors...we want current store me slice banaya wo value wo get karni hai

export default userSlice.reducer;
