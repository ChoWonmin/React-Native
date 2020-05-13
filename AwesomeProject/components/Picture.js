import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class Picture extends Component {
  componentDidMount() {
    // Toggle the state every second
    setInterval(
      () =>
        this.setState(previousState => ({
          isShowingText: !previousState.isShowingText,
        })),
      1000,
    );
  }

  //state object
  state = {isShowingText: true};

  render() {
    let pic = '';

    if (this.props.type === 'one') {
      pic = require('../assets/aladin.jpg');
    } else if (this.props.type === 'two') {
      pic = require('../assets/lat.jpg');
    }

    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <View>
        <Image source={pic} style={{width: '100%'}} />
      </View>
    );
  }
}
