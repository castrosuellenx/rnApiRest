import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <>
      <Text style={styles.title}>App consumindo API Rest com Axios</Text>
      <Text style={styles.subtitle}>Exemplo endereço via CEP</Text>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    paddingHorizontal: '10%',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    paddingHorizontal: '10%',
    textAlign: 'center',
    marginTop: '1%',
    marginBottom: '5%',
  },
});
