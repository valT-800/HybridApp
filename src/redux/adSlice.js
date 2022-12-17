import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid'


export const adSlice = createSlice({
  name: 'ads', 
  initialState: {
    ads_list: [],
  },
  reducers: {
    
    addAd: (state, action) => {
      state.ads_list = [...state.ads_list, {id: uuid.v4(), title: action.payload.title, description: action.payload.description, imageUrl: action.payload.imageUrl, author: action.payload.author}]
    },
    deleteAd: (state, action) => {
      state.ads_list = [...state.ads_list.filter(ads => ads.id != action.payload)]
    },
  }
});

// Action creators are generated for each case reducer function
export const { addAd, deleteAd} = adSlice.actions

export const selectAds = state => state.ads_list;

export default adSlice.reducer