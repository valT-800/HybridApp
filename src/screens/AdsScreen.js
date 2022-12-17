import { Component } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  Button
} from 'react-native';
import Styles from '../../Styles'
import ButtonComponent from '../components/ButtonComponent';
import TouchableComponent from '../components/TouchableListComponent';
import {connect} from 'react-redux'
import app from '../../firebaseConfig'
import {useEffect} from 'react';
import { useState } from "react";
import { addAd } from '../redux/adSlice';
import 'firebase/compat/database'
export function AdsScreen ({ ads_list, addAd, navigation: {navigate}}) {
  
  const reference = app.database()
  
  const [ads, setAds] = useState([]);
  useEffect(()=>{
    reference.ref('ads/').once('value').then(
      snapshot => {    
        snapshot.forEach((child) => {
          addAd({
            title: child.val().title,
            description: child.val().description,
            imageUrl: child.val().imageUrl,
            author: child.val().author
          });         
        })
      })    
   
    }, [])

  return (
    <SafeAreaView style= {Styles.container}>

      <FlatList
        data={ads_list}
        renderItem={({item}) => {
          return(
            <TouchableComponent title = {item.title}
            description = {item.description}
              event =  {() => navigate('Ad', item)}>
            </TouchableComponent>                
          );
        }}
      ></FlatList>
      <ButtonComponent title = "+"
      event={()=> {navigate('NewAd')}}/>
    </SafeAreaView>
  )
}
const mapStateToProps = (state) => {
  //console.log(state.ads.ads_list)
  return {
    ads_list: state.ads.ads_list,
  }
}

export default connect(mapStateToProps, {addAd})(AdsScreen)