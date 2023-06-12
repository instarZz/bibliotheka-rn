import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image, Button, Modal, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Statistiques = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/etageres.jpg')} resizeMode='cover' style={styles.imgBackground}>
                <View style={styles.containerStats}>
                    <Text style={styles.title}>Statistiques</Text>

                    <View style={styles.miniContainerStats}>
                        <Text style={styles.text}>Nombres de livres ajoutés par mois : </Text>
                        <Text style={styles.textHighlight}>40</Text>
                    </View>
                    
                    <View style={styles.miniContainerStats}>
                        <Text style={styles.text}>Nombres de livres lus par mois : </Text>
                        <Text style={styles.textHighlight}>40</Text>
                    </View>

                    <Text>Camembert ici</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignContent: 'center',
        backgroundColor: '#EBE7E5',
    },

    text: {
        color: '#F5E5D7',
        fontSize: 18,
    },

    textHighlight: {
        fontSize: 34,
    },

    miniContainerStats: {
        alignItems: 'center',
    },

    imgBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerStats: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#AF8F7C',
        borderRadius: 10,
        width: '90%',
        height: '90%',
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
    },

    title: {
        color: '#F5E5D7',
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 46,
    },
});

export default Statistiques;
