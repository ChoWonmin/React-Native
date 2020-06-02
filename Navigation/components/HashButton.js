import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class HashButton extends Component {
  render() {
    return (
      <View style={styles.hashWarp}>
        <Text style={styles.hashText}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hashWarp: {
    height: 36,
    paddingHorizontal: 12,
    backgroundColor: '#a6b1e1',
  },
  hashText: {
    lineHeight: 36,
    color: '#f7f9fe',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
