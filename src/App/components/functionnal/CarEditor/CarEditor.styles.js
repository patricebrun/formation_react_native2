import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CarEditor: {flexDirection: 'row', padding: 5},
  leftContainer: {flexGrow: 1},
  rightContainer: {alignItems: 'center', padding: 10},

  image: {
    width: 100,
    height: 100,
    borderColor: 'black',
    borderWidth: 1,
  },
  big: {fontWeight: '900', fontSize: 24},
  price: {color: 'blue'},
});
export default styles;
