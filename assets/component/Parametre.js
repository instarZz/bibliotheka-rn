import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Parametre = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/etageres.jpg')} resizeMode="cover" style={styles.imageBackground}>
                <Text>Parametre</Text>

            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
});
  
export default Parametre;