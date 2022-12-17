import React, { useState } from "react";
import { SafeAreaView, Button, TextInput, Text } from "react-native";
import Styles from "../../Styles";
import { addAd } from "../redux/adSlice";
import {connect, useDispatch} from 'react-redux'
import ButtonComponent from "../components/ButtonComponent";
import CustomTextInput from "../components/CustomTextInput";
import app from "../../firebaseConfig";

function NewAd({addAd, navigation: {navigate}}) {
    const [title, setTitle] = React.useState('')
    const [description, setDescripion] = React.useState('')
    const user = app.auth().currentUser.email
    const handleAddAd = () => {
        console.log(user)
        addAd({title, description, author: user})
        setTitle('')
        setDescripion('')
        navigate('Ads')
    }
    return(
        <SafeAreaView style = {Styles.container}>
            <CustomTextInput title="Title" placeholder = "Enter title of your ad" onChangeText={title => setTitle(title)}/>
            <Text style = {{alignSelf: 'flex-start', marginLeft: 45, fontWeight: 'bold'}}>Description: </Text>
            <TextInput placeholder = "Enter description" style = {Styles.bigInput} onChangeText={(description) => setDescripion(description)}/>
            
            <ButtonComponent
            event = {handleAddAd}
            title = "Add new"/>
                
        </SafeAreaView>
    )
}
  
const mapStateToProps = (state) => {
    return {
      ads_list: state.ads.ads_list,
    }
}
  
export default connect(mapStateToProps,{addAd})(NewAd);