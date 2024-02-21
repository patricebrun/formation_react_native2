import {Dimensions, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FiltrableCarList.styles';
import PropTypes from 'prop-types';
import CarListViewer from '../CarListViewer/CarListViewer';
import CarViewer from '../CarViewer/CarViewer';
const initialState = '';
const FiltrableCarList = props => {
  const [state, setState] = useState(initialState);
  const [current, setCurrent] = useState(undefined);
  return (
    <View style={styles.FiltrableCarList} testID="FiltrableCarList">
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Liste des vehicules
      </Text>
      <TextInput
        placeholder="rechercher..."
        value={state}
        onChangeText={str => setState(str)}
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'grey',
          margin: 5,
        }}
      />
      <View style={{height: Dimensions.get('screen').height - 420}}>
        <ScrollView>
          {props.cars
            .filter(e => e.model.toLowerCase().includes(state.toLowerCase()))
            .map((c, i) => (
              <CarListViewer
                car={c}
                key={`c${i}`}
                onPress={() => {
                  if (props.onUpdateSelect !== undefined) {
                    props.onUpdateSelect(c);
                  }
                }}
              />
            ))}
        </ScrollView>
      </View>
      {props.selectedCar !== undefined && <CarViewer car={props.selectedCar} />}
    </View>
  );
};
FiltrableCarList.propTypes = {
  cars: PropTypes.array.isRequired,
  selectedCar: PropTypes.object,
  onUpdateSelect: PropTypes.func,
};
FiltrableCarList.defaultProps = {
  onUpdateSelect: () => {},
};
export default FiltrableCarList;
