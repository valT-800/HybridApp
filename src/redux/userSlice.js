import { createSlice } from '@reduxjs/toolkit'
const user = 'not'
export const userSlice = createSlice({
  name: 'user', 
  initialState: {
    user,
  },
  reducers: {
      SetCurrentUser: (state, action) => {
        state.user = {user: action.payload.user}
      },
    }
  });

// Action creators are generated for each case reducer function
export const {SetCurrentUser} = userSlice.actions

export const selectUser = state => state.user;

export default userSlice.reducer