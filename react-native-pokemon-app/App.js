import React from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import axios from 'axios'

/**
 * This is a new Component that will be used in our primary
 * Component (App). This is implemented in App by using
 * <Info />
 */
class Info extends React.Component {

    state = {
        data: {
            imgSrc: require('./images/pokeball.png'),
            name: 'Name',
            type: 'Type',
        }
    };

    /**
     * This function comes from React.Component and will be called whenever
     * this Info component receives different props. Here, we use the new
     * to set the 'state'. Changes made to the state causes render() to
     * get called again.
     *
     * @param newProps - an object containing the new props getting set
     */
    componentWillReceiveProps(newProps) {
        console.log(newProps.data);
        this.setState({data: newProps.data});
    }

    render() {
        return (
            <View style={styles.info}>
                <Image source={this.state.data.imgSrc} style={styles.image}/>
                <Text style={styles.text}>{this.state.data.name}</Text>
                <Text style={styles.text}>{this.state.data.type}</Text>
            </View>
        );
    }
}

export default class App extends React.Component {

    state = {};

    getPokemon = () => {

        const app = this;

        // Okay, the pokemon API is down, so I'm replacing it with this API for doggos
        axios.get('https://dog.ceo/api/breeds/image/random').then(function (response) {

            /**
             * Within 'response' is a value called 'data', which can be referenced by calling
             * 'response.data' That will return an object structured like this:
             *      {
             *          status: "success",
             *          message: "http://url/to/an/image"
             *      }
             *
             *  We grab the url found in 'message' and include that in the 'data' object
             *  created below, which in turn is set within this Component's state.
             */
            let data = {
                imgSrc: {uri: response.data.message},
                name: 'LOOK AT HIM!!!',
                type: 'Such a good Boy!'
            };

            app.setState({data});
        });
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
                <Info data={this.state.data}/>
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
    info: {
        flex: .75,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 75
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
