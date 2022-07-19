
import React, { useEffect, useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();
const App = ({ navigation }) => {
  const [isloggedin, setLogged] = useState(null)

  const detectLogin = async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      setLogged(true)
    } else {
      setLogged(false)
    }
  }
  useEffect(() => {
    detectLogin()
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="loading" component={LoadingScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};


export default App;