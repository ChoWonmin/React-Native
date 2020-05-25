import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class PostScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text>Post Screen</Text>
        <Button
          title="Go to HomeScreen"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <PostScreen {...props} navigatetion={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
