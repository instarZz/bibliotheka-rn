import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('./assets/images/etageres.jpg')} resizeMode="cover" style={styles.imageBackground}>
                <Image source={require('./assets/images/bibliotheka_icon.png')} style={styles.imageLogo}/>
                <Text style={styles.textHome}>Bibliotheka</Text>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#EBE7E5',
    },
    imageLogo: {
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    textHome: {
        color: '#F5E5D7',
        fontSize: 30,
        lineHeight: 84,
        textAlign: 'center',
        backgroundColor: '#000000c0',
        width: '100%',
    },
});
  
export default Home;