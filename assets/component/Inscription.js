import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Inscription = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (text) => {
        setUsername(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = () => {
        console.log(`Username : ${username}`);
        console.log(`Email : ${email}`);
        console.log(`Password : ${password}`);
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/etageres.jpg')} resizeMode='cover' style={styles.imgBackground}>
                <View style={styles.containerRegister}>
                    <Text style={styles.title}>Inscription</Text>
                    <View style={styles.containerImg}>
                        <Image
                            style={styles.img}
                            source={require('../images/utilisateur.png')}
                        />
                        <Icon
                            name="download-outline"
                            size={30}
                            color="white"
                        />
                        <Text>Importez votre photo</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nom d'utilisateur"
                        onChangeText={handleUsernameChange}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        onChangeText={handlePasswordChange}
                        value={password}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={handleEmailChange}
                        value={email}
                    />
                    {/* <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>S'incrire</Text>
                    </TouchableOpacity> */}

                    <Button
                        title="S'inscrire"
                        color="#402B1B"
                    />
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    containerRegister: {
        height: '90%',
        width: '90%',
        backgroundColor: '#AF8F7C',
        padding: 16,
        borderRadius: 10,
        justifyContent: 'flex-start',
        elevation: 5,
    },

    imgBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerImg: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 26,
    },

    input: {
        height: 40,
        width: '100%',
        borderColor: '#402B1B',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        backgroundColor: '#EBE7E5',

    },

    img: {
        width: 80,
        height: 80,
        marginLeft: 16,
        marginRight: 16,
    },

    title: {
        fontSize: 44,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#EBE7E5',
        marginBottom: 46,
    },

    btn: {
        marginBottom: 16,
        backgroundColor: '#402B1B',
        borderRadius: 10,
        padding: 10,
    },  
    
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
    },
});
  
export default Inscription;