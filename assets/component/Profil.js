import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { StyleSheet, Text, View, Image, Button, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import MyCarousel from './CustomCarousel';
import { EditProfileModal, AddBooksModal, ConfirmDeleteProfil } from './CustomModal';

const Profil = () => {

    // Navigation vers Stat
    const navigation = useNavigation();
    const handleNavigStat = () => {
        navigation.navigate('Statistiques');
    };

    // useState des modals
    const [addBooksModalVisible, setAddBooksModalVisible] = useState(false);
    const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);
    const [confirmDeleteProfilVisible, setConfirmDeleteProfilVisible] = useState(false);

    const openEditProfileModal = () => {
        setEditProfileModalVisible(true);
    }
    const closeEditProfileModal = () => {
        setEditProfileModalVisible(false);
    }

    const openAddBooksModal = () => {
        setAddBooksModalVisible(true);
    }
    const closeAddBooksModal = () => {
        setAddBooksModalVisible(false);
    }

    const openConfirmDeleteProfilModal = () => {
        setConfirmDeleteProfilVisible(true);
    }
    const closeConfirmDeleteProfilModal = () => {
        setConfirmDeleteProfilVisible(false);
    }

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
                        <AddBooksModal visible={addBooksModalVisible} onClose={closeAddBooksModal} />

                        <EditProfileModal visible={editProfileModalVisible} onClose={closeEditProfileModal} />

                        <ConfirmDeleteProfil visible={confirmDeleteProfilVisible} onClose={closeConfirmDeleteProfilModal} />
                        
                        


                        <Button
                            title="Ajouter un livre"
                            color="#402B1B"
                            onPress={openAddBooksModal}
                        />
                        {/* <View style={styles.marginBottom} />
                        <Button
                            title="Statistiques"
                            color="#402B1B"
                            onPress={handleNavigStat}
                        /> */}
                        <View style={styles.marginBottom} />
                        <Button
                            title="Editer mon profil"
                            color="#402B1B"
                            onPress={openEditProfileModal}
                        />
                        <View style={styles.marginBottom} />
                        <Button     
                        title="Supprimez le compte"
                        color="#B22222"
                        onPress={openConfirmDeleteProfilModal}
                        />

                    </View>
                </View>

                <View style={styles.containerLivres}>
                    <Text style={styles.livreTitle}>Livres en cours de lecture</Text>

                    <MyCarousel />
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

    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
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
        marginBottom: 14,
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
        justifyContent: 'center',
        alignItems: 'center',
        // elevation: 5,
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