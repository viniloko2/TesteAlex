import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const AddRoomScreen = ({ route }) => {
  const [name, setName] = useState('');
  const [totalLugares, setTotalLugares] = useState('');
  const [andar, setAndar] = useState('');
  const [bloco, setBloco] = useState('');
  const [descricao, setDescricao] = useState('');

  const { setRooms } = route.params;

  const cadastrarSala = () => {
    if (!name || !totalLugares || !andar || !bloco) {
      Alert.alert('Campos Obrigatórios', 'Por favor, preencha todos os campos obrigatórios.');
    } else if (parseInt(totalLugares) > 100) {
      Alert.alert('Erro', 'O total de lugares deve ser no máximo 100.');
    } else if (parseInt(andar) > 3) {
      Alert.alert('Erro', 'O andar deve ser no máximo 3.');
    } else if (parseInt(bloco) > 10) {
      Alert.alert('Erro', 'O bloco deve ser no máximo 10.');
    } else if (descricao.length > 50) {
      Alert.alert('Erro', 'A descrição deve ter no máximo 50 caracteres.');
    } else {
      const newRoom = {
        name,
        totalLugares,
        andar,
        bloco,
        descricao,
      };
      setRooms(prevRooms => [...prevRooms, newRoom]);
      showAlert();
    }
  };

  const showAlert = () => {
    Alert.alert(
      'Sucesso',
      'Sala cadastrada com sucesso!',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome da Sala"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Total de Lugares (até 100)"
        keyboardType="numeric"
        value={totalLugares}
        onChangeText={text => setTotalLugares(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Andar (até 3)"
        keyboardType="numeric"
        value={andar}
        onChangeText={text => setAndar(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Bloco (até 10)"
        keyboardType="numeric"
        value={bloco}
        onChangeText={text => setBloco(text)}
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descrição (opcional, até 50 caracteres)"
        multiline={true}
        value={descricao}
        onChangeText={text => setDescricao(text)}
      />
      <Button title="Cadastrar Sala" onPress={cadastrarSala} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddRoomScreen;
