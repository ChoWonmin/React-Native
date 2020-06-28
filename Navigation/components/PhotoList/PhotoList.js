import React, {Component} from 'react';
import {FlatList, View, StyleSheet, Text, Image} from 'react-native';

export default class PhotoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList style={styles.photoList}>
        <View style={styles.photoWrap}>
          {/* <Image
              source={require('../../assets/aladin.jpg')}
              style={{width: '100%'}}
            /> */}
        </View>
        <View style={styles.photoWrap}>1</View>
        <View style={styles.photoWrap}>2</View>
        <View style={styles.photoWrap}>3</View>
        <View style={styles.photoWrap}>4</View>
        <View style={styles.photoWrap}>5</View>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  photoList: {
    // flex: 1,
    backgroundColor: 'blue',
    // flexDirection: 'column',
    // flexWrap: 'wrap',
  },
  photoWrap: {
    width: 150,
    height: 120,
    padding: 12,
    backgroundColor: 'red',
    borderWidth: 1,
  },
});
