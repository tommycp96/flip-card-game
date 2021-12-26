import { Dimensions, StyleSheet } from 'react-native';

const dim = Dimensions.get('window');
const deviceWidth = dim.width;
const deviceHeight = dim.height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
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
    fontSize: 20
  },
  matches: {
    fontSize: 20
  },
  button: {
    backgroundColor: '#4fc3f7',
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4
  }
});
