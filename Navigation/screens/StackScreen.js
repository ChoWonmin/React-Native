import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class StackScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Stack Screen</Text>
        <Button
          title="Go to PostScreen"
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
        <TextInput />
        <Button
          title="Go to Stack"
          onPress={() => {
            navigation.push('Stack');
          }}
        />
        <TextInput />
      </View>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <StackScreen {...props} navigatetion={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
