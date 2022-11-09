import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};
const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0945EF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 30,
    width: '60%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Button;
