import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Telas/HomeScreen';
import AddRoomScreen from './src/Telas/AddRoomScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Salas' }} />
        <Stack.Screen name="AddRoom" component={AddRoomScreen} options={{ title: 'Adicionar Sala' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
