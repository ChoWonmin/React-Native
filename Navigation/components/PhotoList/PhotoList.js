import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text, Image} from 'react-native';

export default class PhotoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.photoList}>
        <View style={styles.photoWrap}>
          {/* <Image
              source={require('../../assets/aladin.jpg')}
              style={{width: '100%'}}
            /> */}
        </View>
        <View style={styles.photoWrap} />
        <View style={styles.photoWrap} />
        <View style={styles.photoWrap}>
          {/* <Image
              source={require('../../assets/aladin.jpg')}
              style={{width: '100%'}}
            /> */}
        </View>
        <View style={styles.photoWrap} />
        <View style={styles.photoWrap} />
        <View style={styles.photoWrap}>
          {/* <Image
              source={require('../../assets/aladin.jpg')}
              style={{width: '100%'}}
            /> */}
        </View>
        <View style={styles.photoWrap} />
        <View style={styles.photoWrap} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoList: {
    // flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  photoWrap: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: 'auto',
    width: 150,
    padding: 12,
    backgroundColor: 'red',
    borderWidth: 1,
  },
});
