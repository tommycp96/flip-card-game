import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Card = ({ char, onPress, index, isMatched, isShow }) => {
  /*
    TODO - add flip card animation using https://reactnative.dev/docs/animated 
    will be better if we can use https://github.com/software-mansion/react-native-reanimated instead
    however, won't use 3rd party library for this assigment
  */

  const handlePress = () => {
    if (isMatched) return;
    onPress(index);
  };

  const cardTextValue = () => {
    if (isMatched) return <Text style={styles.matched}>Already Matched!</Text>;
    else if (isShow) return <Text style={styles.shown}>{char}</Text>;
    else return <Text>?</Text>;
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: !isMatched && !isShow ? '#4fc3f7' : '#fff' }
      ]}
      onPress={handlePress}
    >
      {cardTextValue()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '24%',
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4
  },
  matched: {
    color: 'lightgrey'
  },
  shown: {
    fontWeight: 'bold'
  }
});

export default Card;
