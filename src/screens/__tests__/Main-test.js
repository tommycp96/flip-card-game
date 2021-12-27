import { View, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { styles } from '../../styles/common';
import renderer from 'react-test-renderer';

it('should renders correctly', () => {
  const attempts = 18;
  const matches = 8;
  const tree = renderer
    .create(
      <SafeAreaView style={styles.container}>
        <View style={styles.gridOutline}>
          <Card />
        </View>

        <View style={styles.scoreContainer}>
          <Text style={styles.steps}>Steps: {attempts}</Text>
          <Text style={styles.matches}>Matches: {matches}</Text>
        </View>
        <Button title="Restart" />
      </SafeAreaView>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should renders alert correctly when isGameWon is true', () => {
  const isGameWon = true;
  const attempts = 27;
  const tree =
    isGameWon &&
    renderer
      .create(
        Alert.alert(
          'Congratulations!',
          `You win this game by ${attempts} steps!`,
          [{ text: 'Try another round', onPress: () => initialiseGame() }]
        )
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
