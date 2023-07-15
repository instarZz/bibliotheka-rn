import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import axios from 'axios';

const Connexion = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handleSubmit = async () => {

        console.log('Email : ' + email + ' et mot de passe : ' + password);

        try {
            const response = await axios.post('http://10.0.2.2:8000/api/login', {
                email: email,
                password: password,
            });

            console.log("Réponse de l'API : ", response.data);

            if (response.data.status === "success") {
                navigation.navigate('Mon Profil', {userData: response.data});
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'appel à l'API :", error);
            console.log(error.response.data)
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/etageres.jpg')} resizeMode='cover' style={styles.imgBackground}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={styles.containerRegister}>
                    <Text style={styles.title}>Connexion</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={handleEmailChange}
                        value={email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mot de passe"
                        secureTextEntry
                        onChangeText={handlePasswordChange}
                        value={password}
                    />

                    <Button
                        title="Se connecter"
                        color="#402B1B"
                        onPress={handleSubmit}
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