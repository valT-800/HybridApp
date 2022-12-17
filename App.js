import React from 'react';
import { connect, Provider } from 'react-redux'
import store from './src/redux/store';
import AdsScreen from './src/screens/AdsScreen';
import AdInfoScreen from './src/screens/AdInfoScreen';
import { NavigationContainer } from '@react-navigation/native';
import RegisterScreen from "./src/screens/RegisterScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewAd from './src/screens/NewAd';
import LoginScreen from './src/screens/LoginScreen';
import app from './firebaseConfig'
import Styles from './Styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IconComponent from './src/components/IconComponent';
import RecentUserAdsScreen from './src/screens/RecentUserAdsScreen';
import SignOutComponent from './src/firebase/SignOutComponent';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const PrivateContainer = ({navigation: {navigate}}) => {
  
  return(
    <Tab.Navigator>
      <Tab.Screen name = "Ads" component={AdsScreen} options = {{headerShown: false}}/>
      <Tab.Screen name = "UserScreen" component={RecentUserAdsScreen} options = {{headerShown: false}}/> 
    </Tab.Navigator>
  )
}

function Navigation(){
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={LoginScreen}>
        <Stack.Screen name = "Login" component={LoginScreen} options = {{title: 'Prisijungimas', headerStyle: Styles.header}}/>
        <Stack.Screen name = "Register" component={RegisterScreen} options = {{title: 'Registracija', headerStyle: Styles.header}}/>
        <Stack.Screen name = "Private" component={PrivateContainer} options = {{headerStyle: Styles.header, title: '', headerRight: () => 
        <SignOutComponent/>}}/>
        <Stack.Screen name = "Ad" component={AdInfoScreen} options = {{title: '', headerStyle: Styles.header}}/>   
        <Stack.Screen name='NewAd' component={NewAd} options ={{title: '', headerStyle: Styles.header}}/>    
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}


function App(){
  return(
    <Navigation/>
    
  )
}

export default App;