import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

import Profil from './Profil';
import Parametre from './Parametre';
import Home from './Home';

const tab = createBottomTabNavigator();

export default function App() {
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
            }

            return <Ionicons name={iconName} size={25} color='#402B1B'/>
          }
        })}
      >
        <tab.Screen name='Accueil' component={Home} options={{ headerShown: false }}/>
        <tab.Screen name='Mon Profil' component={Profil} options={{ headerShown: false }}/>
        <tab.Screen name='Paramètres' component={Parametre} options={{ headerShown: false }}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#EBE7E5',
  },
});
