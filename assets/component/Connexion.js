import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, ImageBackground, TouchableOpacity, Platform, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const Connexion = () => {

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
        // SageAreaView te permet de mettre une marge en haut du tel pour pas masquer notif, batterie ect
        // KeyboardAvoidingView est sensé protéger la hauteur des éléments quand le clavier apparait (sensé j'ai bien dit)
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/etageres.jpg')} resizeMode='cover' style={styles.imgBackground}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.containerRegister}
                >
                    <Text style={styles.title}>Connexion</Text>
                    
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

                    {/* <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Se Connecter</Text>
                    </TouchableOpacity> */}

                    <Button
                        title="Se connecter"
                        color="#402B1B"
                    />
                </KeyboardAvoidingView>
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
        marginBottom: 16,
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
  
export default Connexion;