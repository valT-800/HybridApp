import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const CustomTextInput = ({value, onChangeText, placeholder, title, secure}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.title}>{title}:</Text>
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={onChangeText}
      secureTextEntry={secure}
    />
  </View>
);

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    padding: 6,
    minWidth: 165,
    backgroundColor: '#ededed',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 9,
    marginBottom: 10,
  },
  title: {
    padding: 6,
    fontSize: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: "75%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});