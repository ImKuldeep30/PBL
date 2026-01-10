import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './pages/Login.jsx'
import AccountCreated from './pages/AccountCreated.jsx'
import Verified from './pages/Verified.jsx'
import CreatePub_profile from './pages/CreatePub_profile.jsx'
import Greeting from './pages/Greeting.jsx'
import Home from './pages/Home.jsx'
import Settings from './pages/Setting.jsx'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verified" component={Verified} />
        <Stack.Screen name="AccountCreated" component={AccountCreated} />
        <Stack.Screen name="CreatePub_profile" component={CreatePub_profile} />
        <Stack.Screen name="Greeting" component={Greeting} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})