import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import './button.css';

export default class HashButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View className="hashWarp">
        {/* <Text style={styles.hashText}>Hello</Text> */}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   hashWarp: {
//     height: 36,
//     paddingHorizontal: 12,
//     backgroundColor: '#a6b1e1',
//     borderRadius: 100,
//   },
//   hoveredHashWarp: {
//     backgroundColor: '#dcd6f7',
//   },
//   hashText: {
//     lineHeight: 36,
//     color: '#f7f9fe',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });
