import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function TextButton({ children, onPress, css = {} }) {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.btnText, css]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 20,
  },
  btnText: {
    fontSize: 20,
  },
});
