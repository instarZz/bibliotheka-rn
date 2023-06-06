import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

const Profil = () => {
    return (
        <View style={styles.container}>
            <Text>Mon Profil</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});
  
export default Profil;