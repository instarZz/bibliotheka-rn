import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Profil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerProfil}>
                <View style={styles.miniContainerUser}>
                    <Image 
                        source={require('./assets/images/utilisateur.png')}
                        style={styles.imageUser}
                    />
                    <View style={styles.miniContainerText}>
                        <Text style={styles.title}>Lydia Vetrovs</Text>
                        <Text style={styles.text}>monemail@email.com</Text>
                    </View>
                </View>
                <View style={styles.miniContainerBtn}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Ajouter un Livre</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Statistique</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>Editer mon profil</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.containerLivres}>
                <Text style={styles.livreTitle}>Livres en cours de lecture</Text>
                <View>
                    
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 52,
        alignContent: 'center',
        backgroundColor: '#EBE7E5',
    },
    containerProfil: {
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        backgroundColor: '#AF8F7C',
        borderRadius: 10,
        width: '100%',
        height: '40%',
        marginBottom: 16,
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
    title: {
        color: '#F5E5D7',
        fontSize: 24,
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
    // Container livre
    containerLivres: {
        width: '100%',
        height: '58%',
        borderRadius: 10,
        backgroundColor: '#ECD8CC'
    },
    livreTitle: {
        color: '#AF8F7C',
        fontSize: 30,
        textAlign: 'center',
    },
    
});
  
export default Profil;