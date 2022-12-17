import React, { Component } from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  Button
} from 'react-native';
import { connect } from 'react-redux';
import app from '../../firebaseConfig';
import Styles from '../../Styles'
import ButtonComponent from '../components/ButtonComponent';
import TouchableComponent from '../components/TouchableListComponent';

export const RecentUserAdsScreen = ({ ads_list, navigation: {navigate}}) => {
  const user = app.auth().currentUser.email
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
  const user = app.auth().currentUser.email
  console.log(user)
  return {
    ads_list: state.ads.ads_list.filter(item => item.author == user),
  }
}
export default connect(mapStateToProps)(RecentUserAdsScreen)