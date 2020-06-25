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

export default function HomeScreen({navigation}) {
  const [value, onChangeText] = React.useState('');

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
              <TextInput
                style={styles.postInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                onSubmitEditing={event => {
                  if (event.nativeEvent.text === '알라딘') {
                    navigation.navigate('Post');
                  }
                }}
                placeholder="정답을 입력하세요."
                clearTextOnFocus
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
