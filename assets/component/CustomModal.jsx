import React, {useState} from 'react';
import {StyleSheet, View, Text, Modal, Button, Image, TextInput} from 'react-native';
import axios from 'axios';
import {ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';

// ------------------ MODALS ABOUT PROFIL ------------------
const EditProfileModal = ({visible, onClose}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Edition du profil</Text>
                    <Image
                        source={require('../images/utilisateur.png')}
                        style={styles.imageUser}
                    />
                    <View style={styles.marginBottom}/>
                    <TextInput
                        style={styles.input}
                        placeholder="Changez votre nom d'utilisateur"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Changez votre Email"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Changez votre mot de passe"
                    />

                    <View style={styles.marginBottom}/>
                    <View style={styles.containerButton}>
                        <Button
                            title="Editer"
                            color="#402B1B"
                            onPress={{}}
                        />
                        <View style={styles.marginBottom}/>
                        <Button
                            title="Fermer"
                            color="#402B1B"
                            onPress={onClose}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const ConfirmDeleteProfil = ({visible, onClose}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Etes vous sur de vouloir supprimer votre compte ?</Text>
                    <View style={styles.containerButton}>
                        <Button
                            title="Supprimez"
                            color="#B22222"
                        />
                        <Button
                            title="Non"
                            color="#402B1B"
                            onPress={onClose}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

// ------------------ MODALS ABOUT BOOKS ------------------

const AddBooksModal = ({visible, onClose, token, setBookDetails, setShowDetailsBookModal}) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const researchBook = async () => {

        console.log('Token : ' + token);
        console.log('Titre du livre : ' + title + ' et son auteur est : ' + author);

        try {
            const response = await axios.post('http://10.0.2.2:8000/api/researchbook', {
                title: title,
                author: author,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log("Réponse de l'API : ", response.data);

            if (response.data.status === "success") {
                setBookDetails(response.data.book);
                setShowDetailsBookModal(true);
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'appel à l'API :", error);
            console.log(error.response.data);
        }
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Ajoutez un livre !</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Titre du livre"
                        onChangeText={text => setTitle(text)}
                        value={title}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Auteur"
                        onChangeText={text => setAuthor(text)}
                        value={author}
                    />

                    <View style={styles.containerButton}>
                        <Button
                            title="Rechercher"
                            color="#402B1B"
                            onPress={researchBook}
                        />
                        <View style={styles.marginBottom}/>
                        <Button
                            title="Fermer"
                            color="#402B1B"
                            onPress={onClose}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

// A mettre au onPress des livres (openDetailsBookModal)
const DetailsBook = ({ visible, onClose, bookDetails, token, navigation, userData }) => {
    const [readingStatus, setReadingStatus] = useState('');
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [currentPage, setCurrentPage] = useState('');

    const handleReadingStatusChange = (itemValue) => {
        setReadingStatus(itemValue);
    };

    const handleRatingChange = (rating) => {
        setRating(rating);
    };

    const handleReviewChange = (review) => {
        setReview(review);
    };

    const handleCurrentPageChange = (currentPage) => {
        setCurrentPage(currentPage);
    };

    const addBooks = () => {
        console.log('Token : ' + token);

        fetch('http://10.0.2.2:8000/api/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                google_books_id: bookDetails.google_books_id,
                title: bookDetails.title,
                description: bookDetails.description,
                author: bookDetails.author,
                publisher: bookDetails.publisher,
                publication_date: bookDetails.publication_date,
                page_count: bookDetails.page_count,
                isbn: bookDetails.isbn,
                cover_image: bookDetails.coverimage,
                category: category,
                reading_status: readingStatus,
                rating: rating,
                review: review,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.status === 'success') {
                    console.log('Livre ajouté avec succès.');
                    navigation.navigate('Mon Profil', {
                        userData: userData, // Passez les données utilisateur à la page de profil
                        activeCarousel: readingStatus, // Passez le statut du livre pour activer le bon carrousel
                    });
                }
            })
            .catch((error) => {
                console.error("Une erreur s'est produite lors de l'appel à l'API :", error);
                console.log(error.data);
            });
    };

    return (
        <Modal animationType="slide" transparent={true} visible={visible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView>
                        {bookDetails && (
                            <View style={styles.bookContainer}>
                                <Text style={[styles.modalDetail, styles.boldText]}>
                                    {bookDetails.title}
                                </Text>
                                <Image
                                    source={{ uri: bookDetails.coverimage }}
                                    style={styles.bookCoverImage}
                                />
                                <View style={styles.bookDetailsContainer}>
                                    <Text style={styles.modalDetail}>
                                        Auteur: {bookDetails.author}
                                    </Text>
                                    <Text style={styles.modalDetail}>
                                        Genre: {bookDetails.genre}
                                    </Text>
                                    <Text style={styles.modalDetail}>
                                        Nombre de pages: {bookDetails.page_count}
                                    </Text>
                                    <Text style={styles.modalDetail}>
                                        Date de publication: {bookDetails.publication_date}
                                    </Text>
                                    <Text style={styles.modalDetail}>
                                        Maison d'édition: {bookDetails.publisher}
                                    </Text>
                                    <Text style={styles.modalDetail}>
                                        Description: {bookDetails.description}
                                    </Text>
                                    <Text style={[styles.modalDetail, { display: 'none' }]}>
                                        ISBN (si connu): {bookDetails.isbn}
                                    </Text>
                                    <Text style={[styles.modalDetail, { display: 'none' }]}>
                                        Google Books ID: {bookDetails.google_books_id}
                                    </Text>

                                    <Text>État de lecture :</Text>
                                    <Picker
                                        selectedValue={readingStatus}
                                        style={styles.pickerStyle}
                                        onValueChange={(itemValue) =>
                                            handleReadingStatusChange(itemValue)
                                        }
                                    >
                                        <Picker.Item label="À lire" value="to_read" />
                                        <Picker.Item
                                            label="En cours de lecture"
                                            value="reading"
                                        />
                                        <Picker.Item label="Lu" value="read" />
                                    </Picker>

                                    <Text style={styles.label}>Catégorie :</Text>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Catégorie"
                                        value={category}
                                        onChangeText={setCategory}
                                    />

                                    {readingStatus === 'read' && (
                                        <View>
                                            <Text style={styles.label}>Note (1-5) :</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Votre note"
                                                value={rating}
                                                onChangeText={handleRatingChange}
                                            />

                                            <Text style={styles.label}>Avis :</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Votre avis sur le livre"
                                                value={review}
                                                onChangeText={handleReviewChange}
                                            />
                                        </View>
                                    )}

                                    {readingStatus === 'reading' && (
                                        <View>
                                            <Text style={styles.label}>Page actuelle :</Text>
                                            <TextInput
                                                style={styles.input}
                                                placeholder="Page actuelle"
                                                value={currentPage}
                                                onChangeText={handleCurrentPageChange}
                                            />
                                        </View>
                                    )}
                                </View>
                            </View>
                        )}

                        <View style={styles.marginBottom} />
                        <View style={styles.containerButton}>
                            <Button
                                title="Ajouter"
                                color="#B22222"
                                onPress={addBooks}
                            />
                            <Button title="Fermer" color="#402B1B" onPress={onClose} />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

const EditDetailsBook = ({visible, onClose}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Edition du livre</Text>
                    <View style={styles.miniContainerInput}>
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
                    </View>
                    <View style={styles.marginBottom}/>
                    <View style={styles.containerButton}>
                        <Button
                            title="Confirmer"
                            color="#402B1B"
                        />
                        <Button
                            title="Fermer"
                            color="#B22222"
                            onPress={onClose}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

// const styles = StyleSheet.create({
//
//     marginBottom: {
//         marginBottom: 10,
//     },
//     miniContainerInput: {
//         width: '100%',
//     },
//     input: {
//         height: 40,
//         width: '100%',
//         borderColor: '#402B1B',
//         borderWidth: 1,
//         marginBottom: 16,
//         paddingHorizontal: 8,
//         backgroundColor: '#EBE7E5',
//
//     },
//     imageUser: {
//         width: 70,
//         height: 70,
//     },
//
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         fontSize: 20,
//         marginBottom: 14,
//         textAlign: 'center',
//     },
//     modalDetail: {
//         fontSize: 16,
//     },
//     miniContainerBtn: {
//         display: 'flex',
//         flexDirection: 'row',
//         gap: 6,
//     },
//     containerButton: {
//         width: '100%',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         gap: 6,
//     },
//
// });

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    modalDetail: {
        fontSize: 16,
        marginBottom: 10,
    },
    bookCoverImage: {
        width: 200,
        height: 300,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    marginBottom: {
        marginBottom: 10,
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
    },
    dropDownContainer: {
        height: 40,
        width: '100%',
        marginBottom: 10,
    },
    dropDownStyle: {
        backgroundColor: '#fafafa',
        borderWidth: 0,
        borderColor: '#ccc',
    },
    dropDownItem: {
        justifyContent: 'flex-start',
    },
    dropDownMenu: {
        backgroundColor: '#fafafa',
        borderWidth: 0,
        borderColor: '#ccc',
    },
});

export {EditProfileModal, AddBooksModal, ConfirmDeleteProfil, DetailsBook, EditDetailsBook} ;