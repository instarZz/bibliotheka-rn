import Carousel from 'react-native-snap-carousel';
import { View, Text, Image, StyleSheet } from 'react-native';

const data = [
    {
        id: 1,
        title: 'Harry Potter',
        image: require('../images/hp.png'),
    },
    {
        id: 2,
        title: 'Hunger Games',
        image: require('../images/hungergames.png'),
    },
    {
        id: 3,
        title: 'Lord of the ring',
        image: require('../images/lotr.png'),
    },
]

const MyCarousel = () => {
    const renderItem = ({ item }) => (
        <View style={styles.style}>
            <Image source={item.image} style={styles.image}/>
            <Text style={styles.title}>{image.title}</Text>
        </View>
    );

    return (
        <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={300}
        />
    );
};

const styles = StyleSheet.create({
    slide: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    image: {
      width: 200,
      height: 200,
      resizeMode: 'cover',
    },
    
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
});