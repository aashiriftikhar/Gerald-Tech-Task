import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from './assets/color';
import DrawerItems from './Components/DrawerItems';
import { TouchableOpacity } from 'react-native';
import { UIManager } from 'react-native';
import { LayoutAnimation } from 'react-native';
import { Platform } from 'react-native';
import { Button } from 'react-native';
import { Animated } from 'react-native';
import { Easing } from 'react-native';
import HomePage from './Components/HomePage';
import { SafeAreaView } from 'react-native';

const App = () => {
  const spinValue = useState(new Animated.Value(0))[0];
  const [RouteName, setName] = useState('Start');

  const [Toggle, setToggle] = useState(true);
  const [boxPosition, setBoxPosition] = useState(
    spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '0deg'],
    }),
  );

  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  function start() {
    Animated.timing(spinValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true, // To make use of native driver for performance
    }).start();

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '0deg'],
    });

    setBoxPosition(spin);
  }

  function finish() {
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true, // To make use of native driver for performance
    }).start();

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-7.5deg'],
    });

    setBoxPosition(spin);
  }

  useEffect(() => {
    setTimeout(() => {
      start();
    }, 1000);
  }, []);


  const ToggleFun = () => {
    Toggle ? finish() : start();
    setToggle(!Toggle);
  }

  return (
    <SafeAreaView style={styles.root}>
      <DrawerItems ToggleFun={ToggleFun} setName={setName} />
      <HomePage Toggle={Toggle} ToggleFun={ToggleFun} boxPosition={boxPosition} RouteName={RouteName} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  moveRight: {
    transform: [{ rotateZ: '-12deg' }],
  },
});
