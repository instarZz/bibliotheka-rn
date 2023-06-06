import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';

const Inscription = () => {
    return (
        <View style={styles.container}>
            <Text>Inscription</Text>
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
  
export default Inscription;