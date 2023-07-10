import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, Button, Image, TextInput } from 'react-native';

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
                    <View style={styles.marginBottom} />
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

                    <View style={styles.marginBottom} />
                    <View style={styles.containerButton}>
                    <Button     
                        title="Editer"
                        color="#402B1B"
                        onPress={{}}
                    />
                    <View style={styles.marginBottom} />
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

const AddBooksModal = ({visible, onClose}) => {
    return(
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
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Auteur"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="ISBN (si connu)"
                    />
                    
                    <View style={styles.containerButton}>
                    <Button
                        title="Rechercher"
                        color="#402B1B"
                    />
                    <View style={styles.marginBottom} />
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
}

const ConfirmDeleteProfil = ({visible, onClose}) => {
    return(
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

// A mettre au onPress des livres (openDetailsBookModal)
const DetailsBook = ({visible, onClose}) => {

    const [editDetailsVisible, setEditDetailsVisible] = useState(false);
    const openEditDetailsBookModal = () => {
        setEditDetailsVisible(true);
    };

    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Détails du livre</Text>
                    <View>
                        <Text style={styles.modalDetail}>Titre du livre :  </Text>
                        <Text style={styles.modalDetail}>Auteur : </Text>
                        <Text style={styles.modalDetail}>ISBN (si connu) : </Text>
                    </View>
                    <View style={styles.marginBottom} />
                    <View style={styles.containerButton}>
                        <Button
                            title="Modifier"
                            color="#B22222"
                            onPress={openEditDetailsBookModal}
                        />
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
                    <View style={styles.marginBottom} />
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

const styles = StyleSheet.create({

    marginBottom: {
        marginBottom: 10,
    },
    miniContainerInput: {
        width: '100%',
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
    imageUser: {
        width: 70,
        height: 70,
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
    modalDetail: {
        fontSize: 16,
    },
    miniContainerBtn: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
    },
    containerButton: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 6,
    },

});

export { EditProfileModal, AddBooksModal, ConfirmDeleteProfil, DetailsBook, EditDetailsBook } ;