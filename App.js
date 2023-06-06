import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const tab = createBottomTabNavigator();

function AccueilScreen() {
  return (
    <View style={styles.container}>
      <Text>Home ! </Text>
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
    backgroundColor: '#F5E5D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  logoHome: {
    width: '20%',
    height: '20%'
  }
});
