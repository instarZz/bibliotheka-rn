import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const tab = createBottomTabNavigator();

function AccueilScreen() {
  return (
    <View style={styles.container}>
    <ImageBackground source={require('./assets/images/etageres.jpg')} resizeMode="cover" style={styles.imageBackground}>
      <Text style={styles.textHome}>Bibliotheka</Text>
    </ImageBackground>
  </View>
  )
}

function ParametreScreen() {
  return (
    <View style={styles.container}>
      <Text>Parametre </Text>
    </View>
  )
}

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
            } else if (route.name == "Parametre") {
              iconName = "settings";
            }

            return <Ionicons name={iconName} size={25} color='#402B1B'/>
          }
        })}
      >
        <tab.Screen name='Accueil' component={AccueilScreen}/>
        <tab.Screen name='Parametre' component={ParametreScreen}/>
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  textHome: {
    color: '#F5E5D7',
    fontFamily: 'Nunito',
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    width: '100%',
  }
});
