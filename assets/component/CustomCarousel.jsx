import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const CarouselBooksReaded = ({visible, books}) => {
    if (!visible) {
        return null;
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Image source={{uri: item.cover_image}} style={styles.img}/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            data={books}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={100}
        />
    );
};

const CarouselBooksInProgress = ({visible, books}) => {
    if (!visible) {
        return null;
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Image source={{uri: item.cover_image}} style={styles.img}/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            data={books}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={100}
        />
    );
};

const CarouselBooksToRead = ({visible, books}) => {
    if (!visible) {
        return null;
    }

    const renderItem = ({item}) => {
        return (
            <View style={styles.container}>
                <Image source={{uri: item.cover_image}} style={styles.img}/>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    };

    return (
        <Carousel
            data={books}
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
        shadowOpacity: 0.4, // Opacité de l'ombre
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
    }

});

export {CarouselBooksReaded, CarouselBooksInProgress, CarouselBooksToRead};