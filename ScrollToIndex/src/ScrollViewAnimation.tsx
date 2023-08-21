import {Animated, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
// import {ScrollView} from 'react-native';

// the side effect of this method is that its still slow
/* const ScrollViewAnimation = () => {
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
}; */
const ScrollViewAnimation = () => {
  const scrolling = useRef(new Animated.Value(0)).current;

  //   const translation = useRef(new Animated.Value(-100)).current;
  // Instead of doing what's above, we can extrapolate
  const translation = scrolling.interpolate({
    inputRange: [100, 130],
    outputRange: [-100, 0],
    extrapolate: 'clamp',
  });

  console.log('I am here');

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
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrolling}}}],
          {useNativeDriver: true},
        )}
        // onscroll should be fired every 16 ms
        // scrollEventThrottle={16}
        style={{flex: 1}}>
        <View style={{flex: 1, height: 1000}} />
      </Animated.ScrollView>
    </>
  );
};

export default ScrollViewAnimation;
