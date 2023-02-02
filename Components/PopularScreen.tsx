import {useRoute} from '@react-navigation/native';
import type {HomeTabScreenProps} from './navigation/types';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function PopularScreen() {
  const route = useRoute<HomeTabScreenProps<'Popular'>['route']>();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export default PopularScreen;

const styles = StyleSheet.create({});
