import {Image, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';
import styles from './CarListViewer.styles';
import PropTypes from 'prop-types';
const CarListViewer = props => {
  return (
    <TouchableHighlight
      onPress={() => {
        props.onPress(props.car);
      }}>
      <View style={styles.CarListViewer} testID="CarListViewer">
        <View style={styles.left} testID="CarListViewer">
          <Image
            source={
              props.car.photo !== undefined && props.car.photo !== null
                ? {uri: props.car.photo}
                : require('../../../../../assets/img/car.png')
            }
            style={styles.image}
          />
        </View>

        <View style={styles.right} testID="CarListViewer">
          <Text style={styles.titre}>
            {props.car.id !== undefined
              ? props.car.id + ':' + props.car.imat
              : props.car.imat}
          </Text>
          <Text>{props.car.marque}</Text>
          <Text style={styles.titre}>
            diponible :{props.car.disponible === true ? 'Oui' : 'Non'}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
CarListViewer.propTypes = {
  car: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
};
CarListViewer.defaultProps = {};
export default CarListViewer;
