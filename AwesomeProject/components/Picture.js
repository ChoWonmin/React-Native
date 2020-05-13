import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class Picture extends Component {
  render() {
    let pic = '';

    if (this.props.type === 'one') {
      pic = require('../assets/aladin.jpg');
    } else if (this.props.type === 'two') {
      pic = require('../assets/lat.jpg');
    }

    return (
      <View>
        <Image source={pic} style={{width: '100%'}} />
      </View>
    );
  }
}
