import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.styles';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={evt => {
        console.log('button clicked');
      }}>
      <View style={styles.vue}>
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
