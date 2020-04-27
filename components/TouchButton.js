import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { textGray, white, darkGray, lightBlue } from '../utils/colors';

const TouchButton = ({
  children,
  onPress,
  css = { btn: {}, text: {} },
  disabled = false,
}) => {
  console.log({ disabled });
  const disableBtn = disabled ? styles.btnDisabled : {};
  const disableText = disabled ? styles.btnText : {};
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity
        style={[styles.btn, css.btn, disableBtn]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.btnText, css.text, disableText]}>{children}</Text>
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
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
    borderColor: darkGray,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: white,
  },
  btnDisabled: {
    backgroundColor: lightBlue,
    borderColor: darkGray,
    borderWidth: 1,
  },
  btnTextDisabled: {
    color: darkGray,
  },
});

export default TouchButton;
