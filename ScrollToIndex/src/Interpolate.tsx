import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Interpolate = () => {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: translation.interpolate({
          inputRange: [25, 50, 75, 100],
          outputRange: ['red', 'green', 'yellow', 'white'],
          extrapolateLeft: 'clamp',
          extrapolateRight: 'clamp',
        }),
        /*  opacity: translation.interpolate({
          inputRange: [0, 50, 100],
          outputRange: [0, 1, 0],
        }), */
        transform: [
          {translateX: translation},
          {
            rotate: translation.interpolate({
              inputRange: [0, 25, 50, 75, 100],
              outputRange: ['0deg', '90deg', '180deg', '270deg', '360deg'],
            }),
          },
        ],
      }}
    />
  );
};

export default Interpolate;

const styles = StyleSheet.create({});
