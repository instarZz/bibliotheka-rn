import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import React from 'react';

import Profil from './Profil';
import Parametre from './Parametre.js';
import Home from './Home';
import Inscription from './Inscription';
import Connexion from './Connexion';

const tab = createBottomTabNavigator();

export default function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({route}) => ({
          tabBarStyle: { backgroundColor: '#F5E5D7'},
          tabBarActiveTintColor: '#402B1B',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if(route.name == "Accueil") {
              iconName = "home";
            } else if (route.name == "Paramètres") {
              iconName = "settings";
            } else if (route.name == "Mon Profil") {
              iconName = "person-circle-outline";
            } else if (route.name == "Inscription") {
              iconName = "add-circle-outline"
            } else if (route.name == "Connexion") {
              iconName = "enter-outline";
            }

            return <Ionicons name={iconName} size={25} color='#402B1B'/>
          },
          tabBarVisible: isUserLoggedIn,
        })}
      >
        <tab.Screen name='Accueil' component={Home} options={{ headerShown: false }}/>
        {isUserLoggedIn && (
          <tab.Screen name='Mon Profil' component={Profil} options={{ headerShown: false }} />
        )}
        <tab.Screen name='Paramètres' component={Parametre} options={{ headerShown: false }}/>
        <tab.Screen name='Inscription' component={Inscription} options={{ headerShown: false }}/>
        <tab.Screen name='Connexion' component={Connexion} options={{ headerShown: false }}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

