import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Translate = () => {
  // for just spring or timing fxns
  //   const translation = useRef(new Animated.Value(0)).current;

  // for rununing sequence of animations
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    // using spring animations
    /* Animated.spring(translation, {
      toValue: 50,
      useNativeDriver: true,
    }).start(); */

    //  using timing and ease in and out function
    /* useEffect(() => {
    Animated.timing(translation, {
      toValue: 50,
      easing: Easing.bounce,
      delay: 2000,
      duration: 1000,
      useNativeDriver: true,
    }).start(); */

    // using sequence to run multiple animations
    Animated.parallel([
      Animated.spring(translation.y, {toValue: 100, useNativeDriver: true}),
      Animated.spring(translation.x, {toValue: -100, useNativeDriver: true}),
    ]).start();
  }, []);
  return (
    <Animated.View
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        transform: [{translateY: translation.y}, {translateX: translation.x}],
      }}
    />
  );
};

export default Translate;

const styles = StyleSheet.create({});
