import {StyleSheet, View} from 'react-native';
import React from 'react';

const Styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 30,
    backgroundColor: 'red'
  },
});

function FormFieldWrapper({children}) {
  return (
      <View style={Styles.inputWrapper}>
        {children}
      </View>
  )
}

export default FormFieldWrapper;
