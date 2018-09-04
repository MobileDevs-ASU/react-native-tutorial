import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
