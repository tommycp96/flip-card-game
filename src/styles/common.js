import { Dimensions, StyleSheet } from 'react-native';

const dim = Dimensions.get('window');
const deviceWidth = dim.width;
const deviceHeight = dim.height;

export const colors = {
  accent: '#4a4358',
  primary: '#eeb8c8',
  secondary: '#e6e1e5'
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.accent,
    width: deviceWidth,
    borderWidth: 1,
    margin: 'auto'
  },
  gridOutline: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingHorizontal: 20,
    maxWidth: 600,
    justifyContent: 'space-between'
  },
  scoreContainer: {
    marginTop: 8,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly'
  },
  steps: {
    fontSize: 20,
    color: colors.secondary
  },
  matches: {
    fontSize: 20,
    color: colors.secondary
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4
  }
});
