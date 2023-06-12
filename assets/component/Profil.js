import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image, Button, Modal, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

const Profil = () => {

    const [modalBooks, setModalBooks] = useState(false);
    const [modalEditProfil, setModalEditProfil] = useState(false);
    
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../images/etageres.jpg')} resizeMode='cover' style={styles.imgBackground}>
                <View style={styles.containerProfil}>
                    <View style={styles.miniContainerUser}>
                        <Image 
                            source={require('../images/utilisateur.png')}
                            style={styles.imageUser}
                        />
                        <View style={styles.miniContainerText}>
                            <Text style={styles.title}>Lydia Vetrovs</Text>
                            <Text style={styles.text}>monemail@email.com</Text>
                        </View>
                    </View>
                    <View style={styles.miniContainerBtn}>

                        {/* Modal addBooks */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalBooks}
                            onRequestClose={() => {
                                setModalBooks(!modalBooks);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Ajoutez un livre !</Text>

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Titre du livre"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Auteur"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="ISBN (si connu)"
                                    />
                                    
                                    <View style={styles.miniContainerBtn}>
                                        {/* <Pressable
                                        style={styles.btn}
                                        onPress={{}}>
                                            <Text style={styles.btnText}>Rechercher</Text>
                                        </Pressable>

                                        <Pressable
                                        style={styles.btn}
                                        onPress={() => setModalVisible(!modalVisible)}>
                                            <Text style={styles.btnText}>Fermer</Text>
                                        </Pressable> */}
                                    <Button
                                        title="Rechercher"
                                        color="#402B1B"
                                    />
                                    <View style={styles.marginBottom} />
                                    <Button
                                        title="Fermer"
                                        color="#402B1B"
                                        onPress={() => setModalBooks(!modalBooks)}
                                    />
                                    </View>
                                </View>
                            </View>
                        </Modal>

                        {/* Modal Edit Profil */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalEditProfil}
                            onRequestClose={() => {
                                setModalEditProfil(!modalEditProfil);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text>Edition du profil</Text>
                                    <Image 
                                        source={require('../images/utilisateur.png')}
                                        style={styles.imageUser}
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Nom d'utilisateur"
                                    />
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email"
                                    />

                                    <Button     
                                        title="Editer"
                                        color="#402B1B"
                                        onPress={{}}
                                    />
                                    <View style={styles.marginBottom} />
                                    <Button
                                        title="Fermer"
                                        color="#402B1B"
                                        onPress={() => setModalEditProfil(!modalEditProfil)}
                                    />
                                </View>
                            </View>
                        </Modal>

                        <Button
                            title="Ajouter un livre"
                            color="#402B1B"
                            onPress={() => setModalBooks(true)}
                        />
                        <View style={styles.marginBottom} />
                        <Button
                            title="Statistiques"
                            color="#402B1B"
                        />
                        <View style={styles.marginBottom} />
                        <Button
                            title="Editer mon profil"
                            color="#402B1B"
                            onPress={() => setModalEditProfil(true)}
                        />

                    </View>
                </View>

                <View style={styles.containerLivres}>
                    <Text style={styles.livreTitle}>Livres en cours de lecture</Text>
                </View>

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

    containerCarousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerProfil: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#AF8F7C',
        borderRadius: 10,
        width: '90%',
        height: '40%',
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

    miniContainerUser: {
        display: 'flex',
        flexDirection: 'row',
    },

    miniContainerText: {
        paddingLeft: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        fontSize: 26,
        marginBottom: 15,
        textAlign: 'center',
    },

    marginBottom: {
        marginBottom: 10,
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

    miniContainerBtn: {
        display: 'flex',
        flexDirection: 'row',
    },

    title: {
        color: '#F5E5D7',
        fontSize: 34,
        fontWeight: 'bold',
    },

    text: {
        color: '#F5E5D7',
        fontSize: 14,
    },

    imageUser: {
        width: 70,
        height: 70,
    },

    miniContainerBtn: {
        padding: 16,
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

    imgBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Container livre
    containerLivres: {
        width: '90%',
        height: '52%',
        borderRadius: 10,
        backgroundColor: '#ECD8CC',
        elevation: 5,
    },

    livreTitle: {
        color: '#AF8F7C',
        fontSize: 28,
        textAlign: 'center',
    },
    
    // Slider
    slide: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // title: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    // },
});
  
export default Profil;