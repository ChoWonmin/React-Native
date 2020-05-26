import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to PostScreen"
          onPress={() => {
            navigation.navigate('Post');
          }}
        />
        <TextInput />
      </View>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <HomeScreen {...props} navigatetion={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});