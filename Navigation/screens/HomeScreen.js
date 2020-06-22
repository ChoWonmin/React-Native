import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class HomeScreen extends React.Component {
  navigation = this.props;

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.postContainer}>
              <Image
                source={require('../assets/aladin.jpg')}
                style={{width: '100%'}}
              />
              <View style={styles.postInputContainer}>
                <TextInput style={styles.postInput} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  },
  postContainer: {
    width: '100%',
    backgroundColor: '#f7f9fe',
  },
  postImage: {
    width: '100%',
  },
  postInputContainer: {
    width: '100%',
    height: 72,
  },
  postInput: {
    width: '100%',
    height: 72,
    borderWidth: 1,
    padding: 4,
  },
});
