import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { fontSize, hp } from '../../utils/layoutDimentions';

const CTextInput = ({
  placeholder,
  title,
  onChangeText,
  value,
  placeholderTextColor,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor={placeholderTextColor || '#828282'}
          style={styles.input}
          autoCapitalize={'none'}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(1),
  },
  title: {
    fontWeight: '400',
    fontSize: fontSize(2.5),
    lineHeight: hp(3),
  },
  inputContainer: {
    shadowColor: 'brown',
    shadowOpacity: 0.1,
    elevation: 10,
    shadowRadius: hp(3),
    borderRadius: hp(1),
  },
  input: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1),
    borderRadius: hp(1),
    backgroundColor: 'white',
    height: hp(5),
  },
});

export default CTextInput;
