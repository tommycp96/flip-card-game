import React, { useRef } from 'react';
import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native';

const Card = ({ char, onPress, index, isMatched, isShow }) => {
  /*
    TODO - add flip card animation using https://reactnative.dev/docs/animated 
    will be better if we can use https://github.com/software-mansion/react-native-reanimated instead
    however, won't use 3rd party library for this assigment
  */
  const flipAnimation = useRef(new Animated.Value(0)).current;
  let flipRotation = 0;
  flipAnimation.addListener(({ value }) => (flipRotation = value));

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['0deg', '180deg']
        })
      }
    ]
  };

  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ['180deg', '360deg']
        })
      }
    ]
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true
    }).start();
  };

  const flipCard = () => {
    return !!flipRotation ? flipToBack() : flipToFront();
  };

  const handlePress = () => {
    if (isMatched) return;
    onPress(index);
    flipCard();
  };

  const cardTextValue = () => {
    if (isMatched) return <Text style={styles.matched}>{char}</Text>;
    else if (isShow) return <Text style={styles.shown}>{char}</Text>;
    else return <Text style={styles.hidden}>?</Text>;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Animated.View
        style={{
          ...styles.card,
          ...flipToFrontStyle,
          backgroundColor: !isMatched && !isShow ? '#4fc3f7' : '#fff'
        }}
      >
        {cardTextValue()}
      </Animated.View>
      <Animated.View
        style={{
          ...styles.card,
          ...styles.cardBack,
          ...flipToBackStyle,
          backgroundColor: !isMatched && !isShow ? '#4fc3f7' : '#fff'
        }}
      >
        {cardTextValue()}
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '24%',
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    width: '100%',
    padding: 8,
    marginBottom: 8,
    borderRadius: 8,
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
    elevation: 4,
    backfaceVisibility: 'hidden'
  },
  cardBack: {
    position: 'absolute',
    top: 0
  },
  matched: {
    color: 'lightgrey',
    fontSize: 20
  },
  shown: {
    fontWeight: 'bold',
    fontSize: 20
  },
  hidden: {
    fontSize: 20
  }
});

export default Card;
