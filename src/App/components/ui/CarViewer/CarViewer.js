import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarViewer.styles';
import PropTypes from 'prop-types';
const initialState = true;

const CarViewer = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.CaViewer} testID="CaViewer">
      <View style={styles.container}>
        <View style={styles.colLeft}>
          <Text>{props.car.marque}</Text>
          <Text>{props.car.model}</Text>
          <Text>{props.car.imat}</Text>
          <Text>{'\n'}</Text>
          <Text>{props.car.couleur}</Text>
          <Text>{props.car.prix}</Text>
          <Text>{'\n'}</Text>
          <Text>
            Disponible : {props.car.disponible === true ? 'Oui' : 'Non'}
          </Text>
        </View>
        <View style={styles.colRight}>
          <Text> Id : {props.car.id}</Text>
          <Image
            source={
              props.car.photo !== undefined
                ? {uri: props.car.photo}
                : require('../../../../../assets/img/car.png')
            }
            style={styles.image}
          />
        </View>
      </View>
    </View>
  );
};
CarViewer.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    marque: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imat: PropTypes.string.isRequired,
    couleur: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    photo: PropTypes.string,
    disponible: PropTypes.bool.isRequired,
  }).isRequired,
};
CarViewer.defaultProps = {};
export default CarViewer;
