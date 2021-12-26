import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Card from '../components/Card';
import Button from '../components/Button';
import { styles } from '../styles/common';
import {
  INIT_BOARD,
  INIT_STEPS_ATTEMPS,
  INIT_MATCHES,
  CARD_PAIRS_VALUE
} from '../enums/Board.js';

const Main = () => {
  const [placements, setPlacements] = useState(INIT_BOARD);

  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  const [attempts, setAttempts] = useState(INIT_STEPS_ATTEMPS);
  const [matches, setMatches] = useState(INIT_MATCHES);

  const [matchedIndices, setMatchedIndices] = useState([]);

  const [isGameWon, setIsGameWon] = useState(false);

  const getRandomIndex = arr => Math.floor(Math.random() * arr.length);

  // shuffle the cards every time game loaded/restarted
  // the code can be minimize and looks cleaner by utilize shuffle method from lodash
  // but for this assignment won't use 3rd party library
  const shuffleCards = arr => {
    let insertedIndices = [];
    let numbers = CARD_PAIRS_VALUE;

    numbers.forEach(number => {
      for (let j = 0; j < 2; j++) {
        let randomIndex = getRandomIndex(arr);
        while (insertedIndices.includes(randomIndex)) {
          randomIndex = getRandomIndex(arr);
        }
        insertedIndices.push(randomIndex);
        arr[randomIndex] = number;
      }
    });
  };

  const initialiseGame = (arr = INIT_BOARD) => {
    shuffleCards(arr);
    setPlacements(arr);
    clearBoth();
    setAttempts(INIT_STEPS_ATTEMPS);
    setMatches(INIT_MATCHES);
    setMatchedIndices([]);
    setIsGameWon(false);
  };

  const clearBoth = () => {
    setFirst(null);
    setSecond(null);
  };

  useEffect(() => {
    initialiseGame();
  }, []);

  const checkGameWinning = () => {
    if (matchedIndices.length && matchedIndices.length === placements.length)
      setIsGameWon(true);
  };

  useEffect(() => {
    checkGameWinning();
  }, [matchedIndices]);

  const evaluate = () => {
    if (second) {
      console.log('🚀 ~ file: Main.js ~ line 74 ~ evaluate ~ first', first);
      console.log('🚀 ~ file: Main.js ~ line 75 ~ evaluate ~ second', second);
      const doesMatch = first.value === second.value;
      console.log(
        '🚀 ~ file: Main.js ~ line 75 ~ evaluate ~ doesMatch',
        doesMatch
      );
      if (doesMatch) setMatches(mat => ++mat);
      setAttempts(att => ++att);

      setTimeout(() => {
        if (doesMatch) {
          let matchedIndex = matchedIndices.slice();
          matchedIndex.push(first.index, second.index);
          setMatchedIndices(matchedIndex);
        }
        clearBoth();
      }, 1000);
    }
  };

  const checkCompletion = () => {
    if (isGameWon)
      return Alert.alert(
        'Congratulations!',
        `You win this game by ${attempts} steps!`,
        [{ text: 'Try another round', onPress: () => initialiseGame() }]
      );
  };

  useEffect(() => {
    evaluate();
    checkCompletion();
  }, [second]);

  const handleCardPress = index => {
    let selectionObj = {
      index,
      value: placements[index]
    };
    if (!first) setFirst(selectionObj);
    else if (first.index === index) return;
    else setSecond(selectionObj);
  };

  const handleRestart = () => {
    initialiseGame();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridOutline}>
        <CardsContainer
          openIndices={[first?.index, second?.index]}
          placements={placements}
          handleCardPress={handleCardPress}
          matchedCardIndices={matchedIndices}
        />
      </View>

      <View style={styles.scoreContainer}>
        <Text style={styles.steps}>Steps: {attempts}</Text>
        <Text style={styles.matches}>Matches: {matches}</Text>
      </View>
      <Button title="Restart" onPress={handleRestart} />
    </SafeAreaView>
  );
};

const CardsContainer = ({
  placements,
  handleCardPress,
  matchedCardIndices,
  openIndices
}) => {
  return (
    <>
      {placements.map((el, index) => (
        <Card
          key={index}
          index={index}
          isShow={openIndices.includes(index)}
          onPress={handleCardPress}
          isMatched={matchedCardIndices.includes(index)}
          char={el}
        />
      ))}
    </>
  );
};

export default Main;
