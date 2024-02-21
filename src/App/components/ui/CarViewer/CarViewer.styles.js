import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  CaViewer: {},
  container: {
    flexDirection: 'row',
  },
  colLeft: {
    flexGrow: 1,
    padding: 10,
  },
  colRight: {
    alignItems: 'center',
  },
  image: {
    borderColor: 'black',
    borderWidth: 1,
    width: 150,
    height: 75,
  },
});

export default styles;
