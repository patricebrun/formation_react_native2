import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CarListViewer: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 5,
  },
  right: {
    flexGrow: 1,
  },
  image: {
    width: 64,
    height: 64,
  },
  titre: {
    fontSize: 20,
    fontWeight: '700',
    color: 'grey',
  },
});
export default styles;
