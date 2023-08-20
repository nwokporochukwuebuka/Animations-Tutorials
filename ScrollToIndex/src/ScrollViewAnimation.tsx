import {Animated, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native';

const ScrollViewAnimation = () => {
  const [headerShown, setHeaderShown] = useState<boolean>(false);

  const translation = useRef(new Animated.Value(-100)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: headerShown ? 0 : -100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [headerShown]);
  return (
    <>
      {/* Header here */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: 'tomato',
          transform: [{translateY: translation}],
        }}
      />
      <ScrollView
        onScroll={event => {
          const scrolling = event.nativeEvent.contentOffset.y;

          if (scrolling > 100) {
            return setHeaderShown(true);
          } else {
            return setHeaderShown(false);
          }
        }}
        // onscroll should be fired every 16 ms
        scrollEventThrottle={16}
        style={{flex: 1}}>
        <View style={{flex: 1, height: 1000}} />
      </ScrollView>
    </>
  );
};

export default ScrollViewAnimation;

const styles = StyleSheet.create({});
