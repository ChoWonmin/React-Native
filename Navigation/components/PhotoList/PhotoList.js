import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Text, Image} from 'react-native';

export default class PhotoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.photoList}>
        <View style={styles.photoLine}>
          <View style={styles.photoWrap}>
            <Image
              source={require('../../assets/aladin.jpg')}
              style={{width: '100%'}}
            />
          </View>
          <View style={styles.photoWrap} />
          <View style={styles.photoWrap} />
        </View>
        <View style={styles.photoLine}>
          <View style={styles.photoWrap} />
          <View style={styles.photoWrap} />
          <View style={styles.photoWrap} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  photoList: {
    flex: 1,
    backgroundColor: 'blue',
  },
  photoLine: {
    width: '100%',
    height: 120,
  },
  photoWrap: {
    flex: 1,
    padding: 12,
    backgroundColor: 'red',
  },
});
