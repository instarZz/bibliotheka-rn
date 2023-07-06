import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const sliderData = [
    {
        title: 'Parry Hotter',
        description: 'La coupe au bol',
        image: require('../images/hp.png')
    },
    {
        title: 'Hunger Games',
        description: 'Jennyfer Lawrence mama',
        image: require('../images/hungergames.png')
    },
    {
        title: 'Parry Hotter',
        description: 'La coupe au bol',
        image: require('../images/hp.png')
    },
    {
        title: 'Hunger Games',
        description: 'Jennyfer Lawrence mama',
        image: require('../images/hungergames.png')
    },
    {
        title: 'Parry Hotter',
        description: 'La coupe au bol',
        image: require('../images/hp.png')
    },
    {
        title: 'Hunger Games',
        description: 'Jennyfer Lawrence mama',
        image: require('../images/hungergames.png')
    },
]

const MyCarousel = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={item.image} style={styles.img} />
        <Text
            style={styles.title}
        >{item.title}</Text>
      </View>
    );
  };

  return (
    <Carousel
      data={sliderData}
      renderItem={renderItem}
      sliderWidth={300}
      itemWidth={100}
    />
  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    shadowContainer: {
        shadowColor: '#000', // Couleur de l'ombre
        shadowOpacity: 0.3, // Opacité de l'ombre
        shadowRadius: 4, // Rayon de l'ombre
        shadowOffset: {
          width: 0, // Décalage horizontal de l'ombre
          height: 2, // Décalage vertical de l'ombre
        },
    },
    title: {
        fontSize: 16,
    },
    img: {
        width: 90,
        height: 170,
        borderRadius: 10,
        elevation: 4, // Niveau d'élévation pour l'effet d'ombre
        shadowColor: '#000', // Couleur de l'ombre
        shadowOpacity: 0.3, // Opacité de l'ombre
        shadowRadius: 4, // Rayon de l'ombre
        shadowOffset: {
          width: 0, // Décalage horizontal de l'ombre
          height: 2, // Décalage vertical de l'ombre
        },
    }

});
export default MyCarousel;
