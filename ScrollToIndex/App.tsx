import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UberEats from './src/UberEats';
import Translate from './src/Translate';
import Staggering from './src/Staggering';
import Interpolate from './src/Interpolate';

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1 /* justifyContent: 'center', alignItems: 'center' */,
        backgroundColor: 'black',
      }}>
      {/* <UberEats /> */}
      {/* <Translate /> */}
      {/* <Staggering /> */}
      <Interpolate />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
