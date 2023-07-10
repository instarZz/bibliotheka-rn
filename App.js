import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import React from 'react';
import * as Font from 'expo-font';

import Profil from './assets/component/Profil';
import Home from './assets/component/Home';
import Inscription from './assets/component/Inscription';
import Connexion from './assets/component/Connexion';
import Statistiques from './assets/component/Statistiques';

import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed",
  "ColorPropType will be removed",
])

const tab = createBottomTabNavigator();

export default function App() {

  //Font :
  useEffect(() => {
    // Charger la police personnalisée
    Font.loadAsync({
      'Nunito': require('./assets/fonts/Nunito.ttf'),
      'Poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    });
  }, []);

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
            // else if (route.name == "Statistiques") {
            //   iconName = "stats-chart-outline";
            // }

            return <Ionicons name={iconName} size={25} color='#402B1B'/>
          },
          tabBarVisible: isUserLoggedIn,
        })}
      >
        <tab.Screen 
          name='Accueil' 
          component={Home} 
          options={{ headerShown: false }}
        />
        {/* <tab.Screen 
          name='Statistiques' 
          component={Statistiques} 
          options={{ headerShown: false }}
        /> */}
        {/* {isUserLoggedIn && ( */}
          <tab.Screen 
            name='Mon Profil' 
            component={Profil} 
            options={{ headerShown: false }} 
          />
        {/* )} */}
        <tab.Screen 
          name='Inscription' 
          component={Inscription} 
          options={{ headerShown: false }}
        />
        <tab.Screen 
          name='Connexion' 
          component={Connexion} 
          options={{ headerShown: false }}
        />
      </tab.Navigator>
    </NavigationContainer>
  );
}

