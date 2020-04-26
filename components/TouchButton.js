import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const TouchButton = ({ children, onPress, css = { btn: {}, text: {} } }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={[styles.btn, css.btn]} onPress={onPress}>
        <Text style={[styles.btnText, css.text]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
    borderWidth: 1,
    borderColor: '#999',
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default TouchButton;
