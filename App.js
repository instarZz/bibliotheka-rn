import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logoHome}
        source={require('./assets/bibliotheka_icon.png')}
      />
      <Text>Bibliotheka</Text>
    </View>
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
