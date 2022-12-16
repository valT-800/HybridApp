import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import app from './firebaseConfig'
import Styles from './Styles';
import ScanItem from './src/screens/ScanItem';
import ItemScreen from './src/screens/ItemScreen';
import ItemsScreen from './src/screens/ItemsScreen';


const Stack = createNativeStackNavigator();

function Navigation(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={ItemScreen}>
          <Stack.Screen name = "Items" component={ItemsScreen} options = {{headerStyle: Styles.header, title: ''}}/>
          <Stack.Screen name = 'ScanItem' component={ScanItem} options = {{headerStyle: Styles.header, title: ''}}/>
          <Stack.Screen name = "Item" component={ItemScreen} options = {{title: '', headerStyle: Styles.header}}/>   
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}


function App(){
  return(
    <Navigation/>
    
  )
}

export default App;