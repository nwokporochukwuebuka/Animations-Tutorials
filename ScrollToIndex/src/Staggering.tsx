import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';

const Staggering = () => {
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;
  const fourthOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(fourthOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: firstOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: secondOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: thirdOpacity,
        }}
      />
      <Animated.View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          opacity: fourthOpacity,
        }}
      />
    </>
  );
};

export default Staggering;

const styles = StyleSheet.create({});
