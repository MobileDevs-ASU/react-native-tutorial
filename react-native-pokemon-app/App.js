import React from 'react';
import {StyleSheet, Image, Button, Text, View} from 'react-native';

export default class App extends React.Component {

    getPokemon = () => {
        // leave this blank for now
    };

    /**
     * render() returns Component(s) denoted with <>. It only
     * returns one root Component, but others can be nested within
     *
     * Notable Components:
     *  Image: accepts a 'source' attribute, which specifies a picture
     *          which it will display
     *
     *  Text: displays text written within it
     *
     *  Button: displays a button. Its attribute 'onPress' accepts a
     *          function, which is executed when the button is pressed
     */
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./images/pokeball.png')} style={styles.image}/>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Type</Text>
                <Button title="Get Random Pokemon" color='#d00' style={styles.button}
                        onPress={() => {
                            this.getPokemon()
                        }}>
                    <Text style={styles.buttonText}>Get Random Pokemon</Text>
                </Button>
            </View>
        );
    }
}

/**
 * Stylesheets can be applied to Components to describe formatting and appearance.
 * They use CSS-style values, so it would help to learn how that works.
 *
 * Depending on the Component you are making styles for, you will need to check
 * the documentation of that Component to see which attributes are needed.
 */
const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    image: {
        height: 200,
        width: 200,
        margin: 30,
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#d00",
        padding: 5,
    },
    text: {
        fontSize: 20,
        padding: 5,
        color: '#555'
    },
    buttonText: {
        fontSize: 56,
        color: '#fff',
    }
});
