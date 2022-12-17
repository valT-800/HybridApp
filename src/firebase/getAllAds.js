import app from '../../firebaseConfig'
import {useEffect} from 'react';
import { useState } from "react";
import { initialState } from '../redux/adSlice';


export const getAllAds = () => {
  const reference = app.database();
  const [ads, setAds] = useState([]);
  reference.ref('ads/')
    .on('value', (snapshot) => {
      setAds([]);
      //setAds(snapshot.val())
      snapshot.forEach((child) => {
        console.log(child.val(title))
        const newObj = {
          id: child.val().id,
          title: child.val().title,
          description: child.val().description,
          imageUrl: child.val().imageUrl,
          author: child.val().author
        };
        setAds(emptyArray => [...emptyArray, newObj]);
      })
    })
    console.log(ads)
}