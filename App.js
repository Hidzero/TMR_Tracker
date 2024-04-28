import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, SignIn, ForgotPassword, SignUp, CrudWindow, CreatCar, ReadCar, UpdateCar, DeleteCar } from './src/views/index';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Crud Window" component={CrudWindow} />
        <Stack.Screen name="Create Car" component={CreatCar} />
        <Stack.Screen name="Read Car" component={ReadCar} />
        <Stack.Screen name="Update Car" component={UpdateCar} />
        <Stack.Screen name="Delete Car" component={DeleteCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}