import {
  SafeAreaView,
  Text,
  FlatList,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import TouchableComponent from '../components/TouchableListComponent';
import app from '../../firebaseConfig'
import {useEffect} from 'react';
import { useState } from "react";
import 'firebase/compat/database'


export function ItemsScreen ({ navigation: {navigate}}) {
  
  const reference = app.database()
  
  const [items, setItems] = useState([]);

  useEffect(()=>{
    reference.ref('items/').on('value',
      snapshot => {
        setItems([]);    
        snapshot.forEach((child) => {
          const newObj = {
            id: child.key,
            title: child.val().data.title,
            quantity: child.val().data.quantity,
            price: child.val().data.price,
            imageUrl: child.val().data.imageUrl
          }
          setItems(emptyArray => [...emptyArray, newObj]);         
        })
      })    
   
    }, [])

  return (
    <SafeAreaView style= {Styles.container}>

      <FlatList
        data={items}
        renderItem={({item}) => {
          return(
            <TouchableComponent title = {item.title}
              price = {item.price}
              event =  {() => navigate('Item', item)}
              imageUrl = {item.imageUrl}
              >
            </TouchableComponent>                
          );
        }}
      ></FlatList>
      <ButtonComponent title = "Scan"
      event={()=> {navigate('ScanItem')}}/>
    </SafeAreaView>
  )
}

export default ItemsScreen

const Styles  = StyleSheet.create(
  {
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20,
        paddingTop: 30,
        backgroundColor: 'aliceblue'
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        backgroundColor: '#f0ffff',
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid'
      },
      buttonLabel: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center',
        color: 'rgba(80,180,120,1)'
      },
      header: {
        backgroundColor: 'turquoise'
  
      },
      label: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'darkslategrey',
          
      },
      input: {
        fontSize: 18,
        textAlign: 'left',
        color: 'darkslategrey',
        flexShrink: 10
  
      },
      bigInput: {
        width: 270,
        height: 300,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 9,
        marginBottom: 10,
          
      },
      listItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(90,110,150,0.1)',
        height: 100,
        width: 300,
        borderWidth: 3,
        borderColor: 'rgba(200,200,200,0.5)',
        borderStyle: 'solid'
      },
      image:{
        resizeMode: 'contain',
        width: 200,
        height: 200,
      },
      icon: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        borderBottomColor: 'black'
      }
      
  }
  )