import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
// import {AccessAlarm, ThreeDRotation} from '@material-ui/icons';
import {useNavigation} from '@react-navigation/native';

class ComponetScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.postContainer}>
              <Image
                source={require('../assets/aladin.jpg')}
                style={{width: '100%'}}
              />
              <View style={styles.postContent}>
                <View>
                  <Text style={styles.Headline}>알라딘</Text>
                </View>
                <View style={styles.profileLine}>
                  <View style={styles.profile} />
                  <View style={styles.profileBody}>
                    <View style={styles.row}>
                      <Text style={styles.body1}>wonmin</Text>
                    </View>
                    <View style={styles.row}>
                      <Text style={styles.body1}>Seoul, South Korea</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.hashtagLine}>
                  <View style={styles.hashtag}>
                    <Text style={styles.hashtagText}>#Noami_scott</Text>
                  </View>
                  <View style={styles.hashtag}>
                    <Text style={styles.hashtagText}>#arabian</Text>
                  </View>
                  <View style={styles.hashtag}>
                    <Text style={styles.hashtagText}>#Jasmine</Text>
                  </View>
                </View>
              </View>
              <View style={styles.replyContainer}>
                <View style={styles.replyLine}>
                  <View style={styles.profile} />
                  <Text style={styles.replyText}>
                    영화가 너무 아름답다... ost도 잊혀지지않고 디즈니 실사중에
                    최고다.
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.postContainer}>
            <Image
              source={require('../assets/lat.jpg')}
              style={{width: '100%'}}
            />
          </View>
          <Button
            title="Go to ComponetScreen"
            onPress={() => {
              navigation.navigate('Post');
            }}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <ComponetScreen {...props} navigatetion={navigation} />;
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
  postContent: {
    padding: 16,
  },
  profileLine: {
    flexDirection: 'row',
    paddingTop: 8,
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 100,
    backgroundColor: '#a6b1e1',
  },
  profileBody: {
    flex: 1,
    padding: 8,
  },
  hashtagLine: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 8,
  },
  hashtag: {
    backgroundColor: '#a6b1e1',
    height: 32,
    lineHeight: 32,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 100,
    marginLeft: 4,
  },
  hashtagText: {
    color: '#f7f9fe',
    fontSize: 14,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  replyContainer: {
    width: '100%',
    display: 'flex',
    overflow: 'hidden',
    padding: 16,
  },
  replyLine: {
    paddingTop: 4,
    paddingBottom: 4,
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#3e4554',
  },
  replyText: {
    padding: 4,
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
  },
  Headline: {
    color: '#3e4554',
    fontSize: 28,
    fontWeight: 'bold',
  },
  body1: {
    color: '#3e4554',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 14,
  },
});
