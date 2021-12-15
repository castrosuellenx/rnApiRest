import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import apiCep from '../services/api';

export default function Searcher() {
  const [searchCep, setSearchCep] = useState();
  const [infoCep, setInfoCep] = useState('');
  const [invalidCep, setInvalidCep] = useState();

  const getCep = async () => {
    const {data} = await apiCep.get(`${searchCep}/json/`);
    setInfoCep(data);
  };

  const onInvalidCep = () => {
    if (searchCep != '') {
      var validCep = /^[0-9]{8}$/;

      if (validCep.test(searchCep)) {
        setInvalidCep(false);
      } else {
        setInvalidCep(true);
      }
    } else {
      setInvalidCep(true);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchCep}
        value={searchCep}
        placeholder="Digite o CEP"
        onEndEditing={onInvalidCep}
      />

      {invalidCep && <Text style={styles.desc}>Digite um CEP válido</Text>}

      <TouchableOpacity
        style={styles.button}
        onPress={getCep}
        disabled={invalidCep}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>

      <View style={{width: '70%'}}>
        <Text style={styles.desc}>Rua: {infoCep.logradouro}</Text>
        <Text style={styles.desc}>Bairro: {infoCep.bairro}</Text>
        <Text style={styles.desc}>Cidade: {infoCep.localidade}</Text>
        <Text style={styles.desc}>Estado: {infoCep.uf}</Text>
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
