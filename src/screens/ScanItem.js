import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, TextInput, Text, View, StyleSheet } from "react-native";
import Styles from "../../Styles";
import ButtonComponent from "../components/ButtonComponent";
import app from "../../firebaseConfig";
import { BarCodeScanner } from 'expo-barcode-scanner';
import 'firebase/compat/database'

function ScanItem({navigation: {navigate}}) {
    const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    const jsonValue = JSON.parse(data);
    console.log(jsonValue)
    handleSubmit(jsonValue)
  };
  const reference =app.database()

  const handleSubmit = (data) => {
      const newRef = reference.ref('items/').push();
        newRef.set({
          data
        })
        .then(() => console.log('Data inserted'));
      navigate('Items')
}

  /*const handleSubmit = (data) => {
    reference.ref('/items')
    .once('value', snapshot => {
      if(snapshot.hasChild({data})) {
        navigate('Items')
      }else{
        const newRef = reference.ref('items/').push();
            newRef.set({
              data
            })
            .then(() => console.log('Data inserted'));
        navigate('Items')
}})}*/

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <SafeAreaView style = {Styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <ButtonComponent title={'Tap to Scan Again'} event={() => 
        setScanned(false)}
        />}
      </SafeAreaView>
  );
}
  
export default ScanItem