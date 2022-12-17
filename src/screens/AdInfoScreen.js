import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import app from '../../firebaseConfig';
import Styles from '../../Styles';
import ButtonComponent from '../components/ButtonComponent';
import FadeInView from '../components/FadeInView';
import IconComponent from '../components/IconComponent';

import { addAd, deleteAd } from '../redux/adSlice';


function AdInfoScreen({deleteAd, addAd, route,  navigation: {navigate}}) {
  const { id, title, description, imageUrl, author } = route.params;
  const [updatedTitle, setTitle] = useState(title)
  const [updatedDescription, setDescription] = useState(description)
  const [visibility, setVisibility] = useState(false)
  const user = app.auth().currentUser.email
  const handleUpdateAd = () => {
      deleteAd(id)
      addAd({title: updatedTitle, description: updatedDescription, imageUrl, author: user})
      setVisibility(false)
      navigate('Ads')
  }

  const saveChanges = () => {
    if(visibility == true)
    {
      return(
        <ButtonComponent title="Save"
        event = {handleUpdateAd}/>
      )
      
        
    }
    else{return null}
    
  }

  const changeObject = () => {
    if(author == user){
      return(
        <View style = {{ alignSelf: "flex-end", marginRight: 10}}>
          <IconComponent name = "edit" event={()=> setVisibility(true)}/>
          <IconComponent name = "delete" event={() => {
            deleteAd(id) 
            navigate('Ads')
        }}/>
      </View>
      )
    }

  }
  return (
    <SafeAreaView style={Styles.container}>
      {changeObject()}    
      <TextInput
           style = {Styles.label}
           value = {updatedTitle}
           editable = {visibility}
           onChangeText = {(text) => setTitle(text)}
      />
      <FadeInView style = {Styles.image}>
        <Image style = {Styles.image} source ={{uri: imageUrl}}/>
      </FadeInView>
      
      <TextInput
           style = {Styles.input}
           value = {updatedDescription}
           editable = {visibility}
           onChangeText = {(text) => setDescription(text)}/>
      <Text>{author}</Text>
      <View>
        {saveChanges()}
      </View>
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {
    ads_list: state.ads.ads_list,
  }
}

export default connect(mapStateToProps, {deleteAd, addAd})(AdInfoScreen);