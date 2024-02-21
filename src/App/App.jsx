import React, {useState} from 'react';
import {View} from 'react-native';
import styles from './App.styles';
import {cars} from '../../db/db.json';
import FiltrableCarList from './components/ui/FiltrableCarList/FiltrableCarList';
import CarViewer from './components/ui/CarViewer/CarViewer';
const initialState = cars;
function App() {
  const [cars, setCars] = useState(initialState);
  const [current, setCurrent] = useState(undefined);
  return (
    <View>
      <FiltrableCarList
        cars={cars}
        selectedCar={current}
        onUpdateSelect={c => {
          if (current !== undefined && current === c) {
            setCurrent(undefined);
          } else {
            setCurrent(c);
          }
        }}
      />
      {/* <CarViewer c={current}/> */}
    </View>
  );
}

export default App;
