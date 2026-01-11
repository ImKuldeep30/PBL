import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/Login.jsx';
import AccountCreated from './pages/AccountCreated.jsx';
import Verified from './pages/Verified.jsx';
import CreatePub_profile from './pages/CreatePub_profile.jsx';
import Greeting from './pages/Greeting.jsx';
import Home from './pages/Home.jsx';
import Settings from './pages/Setting.jsx';
import OnboardingScreen from './pages/OnboardingScreen.jsx';

import { getItem } from './utils/asyncStorage';
import CommunityMain from './pages/CommunityMainPreview.jsx';
import CommunityMainPreview from './pages/CommunityMainPreview.jsx';
import MainCommunityChat from './pages/MainCommunityChat.jsx';
const Stack = createNativeStackNavigator();

const App = () => {
return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verified" component={Verified} />
          <Stack.Screen name="AccountCreated" component={AccountCreated} />
          <Stack.Screen name="CreatePub_profile" component={CreatePub_profile} />
          <Stack.Screen name="Greeting" component={Greeting} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} /> */}
           <Stack.Screen name="CommunityMainPreview" component={CommunityMainPreview} />
          <Stack.Screen name="MainCommunityChat" component={MainCommunityChat} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
export default App;
