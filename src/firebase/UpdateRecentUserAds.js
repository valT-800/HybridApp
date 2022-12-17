import React from 'react';
import app from '../../firebaseConfig'
import {useEffect} from 'react';
import { useState } from "react";

const reference = app
.database()
.ref('ads/')

updateData = (ads_list) => {
  reference.update({ads_list})
  reference.once('value' )
  .then(snapshot => {
     // console.log(snapshot.val());
     snapshot.forEach((child) => {
       ads_list.push({
          id: child.val().id,
          title: child.val().title,
          description: child.val().description,
          imageUrl: child.val().imageUrl,
          author: child.val().author
       }        
       );
    });
    //console.log(items);
    this.setState({problmes: items}); 
    this.setState({isloading:false});
  })
  .catch(error => console.log(error));
}

clearData = ()  => {
  reference.ref().remove()
  .then(() => console.log('Database deleted'))
  .catch(()=> console.log('nope'))
}

const UpdateAds = (ads_list) => {

  clearData()
  updateData(ads_list)
}

export default ads;