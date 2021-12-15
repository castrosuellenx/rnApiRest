import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default function Searcher({street, neighborhood, city, state}) {
  const [cep, setCep] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setCep}
        value={cep}
        placeholder="Digite o CEP"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <View style={{width: '70%'}}>
        <Text style={styles.desc}>{`Rua: ${street || ''}`}</Text>
        <Text style={styles.desc}>{`Bairro: ${neighborhood || ''}`}</Text>
        <Text style={styles.desc}>{`Cidade: ${city || ''}`}</Text>
        <Text style={styles.desc}>{`Estado: ${state || ''}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '75%',
    backgroundColor: '#04122C',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderRadius: 5,
    paddingHorizontal: '20%',
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#D1A10E',
    borderRadius: 8,
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    marginVertical: '5%',
  },
  buttonText: {
    fontSize: 15,
    color: '#000000',
  },
  desc: {
    color: '#FFFFFF',
    textAlign: 'left',
  },
});
