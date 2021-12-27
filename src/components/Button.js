import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/common';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
