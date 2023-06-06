import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const Inscription = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.containerRegister}>
                <Text>Inscription</Text>
                <View>
                    <Image/>
                    <Text>Importez votre photo de profil</Text>
                </View>
                <View>
                    <Text>Nom d'utilisateur:</Text>
                    <TextInput
                        value={username}
                        onChangeText={setUsername}
                    />

                    <Text>Email:</Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Text>Mot de passe:</Text>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    {/* Ajoutez ici le composant pour le captcha */}

                    <Button title="S'inscrire"/>

                    <Button title="S'inscrire avec Google"/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    containerRegister: {
        backgroundColor: '#AF8F7C',
        width: '100%',
        height: '80%',
        borderRadius: 10,

    }
});
  
export default Inscription;