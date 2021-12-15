import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './components/Header';
import Searcher from './components/Searcher';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />

      <Searcher />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
