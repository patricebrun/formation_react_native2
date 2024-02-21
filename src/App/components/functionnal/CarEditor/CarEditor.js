import {
  Image,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarEditor.styles';
import PropTypes from 'prop-types';
import Button from '../../ui/Button/Button';
const initialState = true;
const CarEditor = props => {
  console.log(props);
  const [car, setCar] = useState(props.car);
  useEffect(() => {
    return () => {};
  }, [car]);
  return (
    <>
      <Button
        onButtonClicked={() => {
          ToastAndroid.show('validation de formulaire', 1000);
          props.onSubmit(car);
        }}>
        Valider
      </Button>
      <View style={styles.CarEditor} testID="CarEditor">
        <View style={styles.leftContainer}>
          <TextInput
            style={styles.big}
            value={car.marque}
            onChangeText={newStrValue => {
              setCar({...car, marque: newStrValue});
            }}
          />
          <TextInput
            style={styles.big}
            value={car.model}
            onChangeText={newStrValue => {
              setCar({...car, marque: newStrValue});
            }}
          />
          <TextInput
            style={styles.big}
            value={car.imat}
            onChangeText={newStrValue => {
              setCar({...car, imat: newStrValue});
            }}
          />
          <Text>{'\n'}</Text>
          <TextInput
            style={styles.big}
            value={car.couleur}
            onChangeText={newStrValue => {
              setCar({...car, couleur: newStrValue});
            }}
          />
          <TextInput
            keyboardType="decimal-pad"
            style={[styles.big, styles.price]}
            value={car.prix.toString()}
            onChangeText={newStrValue => {
              setCar({...car, prix: parseFloat(newStrValue)});
            }}
          />
          <Text>{'\n'}</Text>
          <Text>
            Disponible :
            <Switch
              value={car.disponible}
              onValueChange={newBooleanValue => {
                setCar({...car, disponible: newBooleanValue});
              }}
            />
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>{props.car.id}</Text>
          <TouchableHighlight
            onPress={() => {
              ToastAndroid.show('Change image ask', 1000);
            }}>
            <Image source={{uri: props.car.photo}} style={styles.image} />
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};
CarEditor.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    marque: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imat: PropTypes.string.isRequired,
    couleur: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    disponible: PropTypes.bool.isRequired,
    photo: PropTypes.string,
  }).isRequired,
};
CarEditor.defaultProps = {};
export default CarEditor;
