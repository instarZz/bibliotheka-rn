import React, {useEffect, useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {
    CarouselBooksReaded as ReadedCarousel,
    CarouselBooksInProgress as InProgCarousel,
    CarouselBooksToRead as ToReadCarousel
}
    from './CustomCarousel';

import {
    EditProfileModal,
    AddBooksModal,
    ConfirmDeleteProfil,
    DetailsBook,
    EditDetailsBook
} from './CustomModal';

const Profil = ({route}) => {

    const { userData, activeCarousel } = route.params;
    const userInfo = userData ? userData.infos_user[0] : null;
    const token = userData ? userData.token : null;
    const booksUser = userData ? userData.books_user : null;

    const defaultName = 'Nom par défaut';
    const defaultEmail = 'email@pardefaut.com';

    const navigation = useNavigation();

    // useState des modals
    const [addBooksModalVisible, setAddBooksModalVisible] = useState(false);
    const [editProfileModalVisible, setEditProfileModalVisible] = useState(false);
    const [confirmDeleteProfilVisible, setConfirmDeleteProfilVisible] = useState(false);
    const [detailsBookVisible, setDetailsBookVisible] = useState(false);
    const [editDetailsBookVisible, setEditDetailsBookVisible] = useState(false);
    // useState Carousel
    const [carouselType, setCarouselType] = useState(activeCarousel || 'readed');
    // useState active button
    const [activeButton, setActiveButton] = useState(null);
    // useState book details
    const [bookDetails, setBookDetails] = useState(null);
    const [showDetailsBookModal, setShowDetailsBookModal] = useState(false);

    // Edit Profil
    const openEditProfileModal = () => {
        setEditProfileModalVisible(true);
    }
    const closeEditProfileModal = () => {
        setEditProfileModalVisible(false);
    }

    // Add Books
    const openAddBooksModal = () => {
        setAddBooksModalVisible(true);
    }
    const closeAddBooksModal = () => {
        setAddBooksModalVisible(false);
    }

    // Confirm Delete
    const openConfirmDeleteProfilModal = () => {
        setConfirmDeleteProfilVisible(true);
    }
    const closeConfirmDeleteProfilModal = () => {
        setConfirmDeleteProfilVisible(false);
    }

    // Details Book
    const openDetailsBookModal = () => {
        setDetailsBookVisible(true);
    }
    const closeDetailsBookModal = () => {
        setDetailsBookVisible(false);
    }

    // Edit Details Book
    const openEditDetailsBookModal = () => {
        setEditDetailsBookVisible(true);
    }
    const closeEditDetailsBookModal = () => {
        setEditDetailsBookVisible(false);
    }

    useEffect(() => {
        toggleCarousel(activeCarousel);
    }, [activeCarousel]);

    // Carousel method
    const toggleCarousel = (type) => {
        setCarouselType(type);
    }

    const getCarouselText = () => {
        switch (carouselType) {
            case 'readed':
                return 'Livres lus';
            case 'inProgress':
                return 'Livre en cours de lecture';
            case 'toRead':
                return 'Livres à lire';
            default:
                return '';
        }
    };

    // Filter books by status
    const readedBooks = booksUser.filter(book => book.status === 'read');
    const inProgressBooks = booksUser.filter(book => book.status === 'reading');
    const toReadBooks = booksUser.filter(book => book.status === 'to_read');

    // active button method
    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId)
    };

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
                            <Text style={styles.title}>{userInfo ? userInfo.name : defaultName}</Text>
                            <Text style={styles.text}>{userInfo ? userInfo.email : defaultEmail}</Text>
                        </View>
                    </View>
                    <View style={styles.miniContainerBtn}>

                        {/* Modal */}
                        {showDetailsBookModal ? (
                            <DetailsBook
                                visible={true}
                                onClose={() => setShowDetailsBookModal(false)}
                                bookDetails={bookDetails}
                                token={token}
                                navigation={navigation}
                                userData={userData}
                            />
                        ) : (
                            <AddBooksModal
                                visible={addBooksModalVisible}
                                onClose={closeAddBooksModal}
                                token={token}
                                setBookDetails={setBookDetails}
                                setShowDetailsBookModal={setShowDetailsBookModal}
                            />
                        )}

                        <EditProfileModal visible={editProfileModalVisible} onClose={closeEditProfileModal}/>

                        <ConfirmDeleteProfil visible={confirmDeleteProfilVisible}
                                             onClose={closeConfirmDeleteProfilModal}/>

                        <DetailsBook visible={detailsBookVisible} onClose={closeDetailsBookModal}
                                     bookDetails={bookDetails}/>

                        <EditDetailsBook visible={editDetailsBookVisible} onClose={closeEditDetailsBookModal}/>

                        <Button
                            title="Ajouter un livre"
                            color="#402B1B"
                            onPress={openAddBooksModal}
                        />

                        <View style={styles.marginBottom}/>
                        <Button
                            title="Editer mon profil"
                            color="#402B1B"
                            onPress={openEditProfileModal}
                        />
                        <View style={styles.marginBottom}/>
                        <Button
                            title="Supprimez le compte"
                            color="#B22222"
                            onPress={openConfirmDeleteProfilModal}
                        />

                    </View>
                </View>

                <View style={styles.miniContainerOnglet}>
                    <TouchableOpacity
                        style={[styles.btn, activeButton === 1 && styles.btnActive]}
                        onPress={() => {
                            toggleCarousel('readed');
                            handleButtonClick(1);
                        }}
                    >
                        <Text style={styles.btnText}>LIVRES LUS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn, activeButton === 2 && styles.btnActive]}
                        onPress={() => {
                            toggleCarousel('inProgress');
                            handleButtonClick(2);
                        }}
                    >
                        <Text style={styles.btnText}>EN COURS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.btn, activeButton === 3 && styles.btnActive]}
                        onPress={() => {
                            toggleCarousel('toRead');
                            handleButtonClick(3);
                        }}
                    >
                        <Text style={styles.btnText}>À LIRE</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerLivres}>
                    <Text style={styles.livreTitle}>{getCarouselText()}</Text>

                    {carouselType === 'readed' && <ReadedCarousel visible={true} books={readedBooks} />}
                    {carouselType === 'inProgress' && <InProgCarousel visible={true} books={inProgressBooks} />}
                    {carouselType === 'toRead' && <ToReadCarousel visible={true} books={toReadBooks} />}
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
        marginBottom: 8,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        elevation: 10,
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
        justifyContent: 'center',
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
        fontSize: 20,
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

    miniContainerBtn: {
        display: 'flex',
        flexDirection: 'row',
        padding: 16,
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

    miniContainerOnglet: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 6,
    },
    btn: {
        backgroundColor: '#402B1B',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        padding: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 14,
        fontWeight: 600,
    },

    btnActive: {
        backgroundColor: '#AF8F7C', // Couleur d'arrière-plan en état actif
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
        color: '#000',
        fontSize: 28,
        textAlign: 'center',
        // fontFamily: 'Nunito',
        marginTop: 16,
    },

    // Slider
    slide: {
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Profil;