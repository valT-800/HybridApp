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
import app from '../../firebaseConfig';
import Styles from '../../Styles';
import ButtonComponent from '../components/ButtonComponent';
import FadeInView from '../components/FadeInView';
import IconComponent from '../components/IconComponent';
import 'firebase/compat/database'


function ItemScreen({route,  navigation: {navigate}}) {
  const { id, title, quantity, price, imageUrl } = route.params;
  const [updatedTitle, setTitle] = useState(title)
  const [updatedPrice, setPrice] = useState(price)
  const [updatedQuantity, setQuantity] = useState(quantity)
  const [visibility, setVisibility] = useState(false)
  const reference = app.database()


  const saveChanges = () => {
    if(visibility == true)
    {
      return(
        <ButtonComponent title="Save"
        event = {() => {
          updateItem()
          setVisibility(false)
          navigate('Items')
        }
      }/>
      )     
    }
    else{return null}
    
  }
  const updateItem = () => {
    newRef = reference.ref('items/'+ id + '/data/').update({
      title: updatedTitle,
      price: updatedPrice,
      quantity: updatedQuantity,
      imageUrl: imageUrl
    })
    .then(() => console.log('Data inserted'));
}

  deleteItem = ()  => {
    reference.ref("items/"+id).remove()
    .then(() => console.log('Deleted', id))
    .catch(()=> console.log('nope'))
  }

  const changeObject = () => {
      return(
        <View style = {{ alignSelf: "flex-end", marginRight: 10}}>
          <IconComponent name = "edit" event={()=> setVisibility(true)}/>
          <IconComponent name = "delete" event={() => {
            deleteItem() 
            navigate('Items')
        }}/>
      </View>
      )
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
        value = {updatedPrice}
        editable = {visibility}
        onChangeText = {(text) => setPrice(text)}/>

      <TextInput
        style = {Styles.input}
        value = {updatedQuantity}
        editable = {visibility}
        onChangeText = {(text) => setQuantity(text)}/>
      <View>
        {saveChanges()}
      </View>
    </SafeAreaView>
  )
}


export default ItemScreen