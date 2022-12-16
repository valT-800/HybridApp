import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image, View } from "react-native";


const TouchableComponent = ({title, price, event, imageUrl}) => {
    return(
        <TouchableOpacity
        style ={styles.listItem}       
        onPress = {event}
        >
            <Image style = {styles.image} source ={{uri: imageUrl}}/>
            <View style = {{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style = {styles.title}>{title}</Text>
                <Text style = {styles.price}>{price}</Text>
            </View>
            
            
        </TouchableOpacity>
        
    )
}
const styles  = StyleSheet.create(
    {
        listItem: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: 150,
            width: 150,
            borderWidth: 1,
            borderRadius: 5,
            padding: 5,
            borderColor: 'rgba(200,200,200,0.5)',
            borderStyle: 'solid',
        },
        title: {
            marginLeft: 10,
            fontSize: 20,
            fontWeight: '500',
            textAlign: 'center',
            color: 'darkslategrey'
            
        },
        price: {
            marginLeft: 20,
            fontSize:15,
            fontWeight: '500',
            textAlign: 'center',
            color: 'slategrey'
        },
        image:{
            resizeMode: 'contain',
            width: 100,
            height: 100,
        },
    }
)
export default TouchableComponent;