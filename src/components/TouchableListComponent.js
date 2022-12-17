import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


const TouchableComponent = ({title, description, event}) => {
    return(
        <TouchableOpacity
        style ={styles.listItem}
        title = {title}
        
        onPress = {event}
        >
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.description}>{description}</Text>
            
        </TouchableOpacity>
        
    )
}
const styles  = StyleSheet.create(
    {
        listItem: {
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: 50,
            width: 300,
            borderWidth: 1,
            borderRadius: 5,
            marginBottom: 5,
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
        description: {
            marginLeft: 30,
            fontSize:15,
            fontWeight: '500',
            textAlign: 'center',
            color: 'slategrey',
            flexShrink: 1
        }
    }
)
export default TouchableComponent;