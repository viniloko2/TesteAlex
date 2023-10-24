import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const [expandedCardIndex, setExpandedCardIndex] = useState(null);

  const toggleCard = index => {
    setExpandedCardIndex(index === expandedCardIndex ? null : index);
  };

  const deleteRoom = index => {
    Alert.alert(
      'Excluir Sala',
      'Tem certeza de que deseja excluir esta sala?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            const updatedRooms = [...rooms];
            updatedRooms.splice(index, 1);
            setRooms(updatedRooms);
            setExpandedCardIndex(null); // Fecha o card ao excluir
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {rooms.length === 0 ? (
        <Text>Você não possui nenhuma sala cadastrada ainda</Text>
      ) : (
        rooms.map((room, index) => (
          <View key={index} style={styles.roomCard}>
            <TouchableOpacity onPress={() => toggleCard(index)}>
              <Text>{room.name}</Text>
            </TouchableOpacity>
            {expandedCardIndex === index && (
              <View>
                <Text>Total de lugares: {room.totalLugares}</Text>
                <Text>Andar: {room.andar}</Text>
                <Text>Bloco: {room.bloco}</Text>
                  <Text>Descrição: {room.descricao.substring(0, 50)}</Text>
                {/* Limita a descrição a 20 caracteres */}
                <Button title="Excluir" onPress={() => deleteRoom(index)} />
              </View>
            )}
          </View>
        ))
      )}
      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar Sala"
          onPress={() => navigation.navigate('AddRoom', { setRooms })}
        />
      </View>
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
  roomCard: {
    backgroundColor: '#CCCCCC',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
