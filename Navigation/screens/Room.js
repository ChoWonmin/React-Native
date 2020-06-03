import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import HashButton from '../components/HashButton';

class Room extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.infoContainer}>
            <View style={styles.infoLine}>
              <View style={styles.profile} />
              <View style={styles.profileName}>
                <Text style={styles.Headline}>wonmin</Text>
              </View>
              <View style={styles.profileInfoWarp}>
                <View style={styles.profileInfoBox}>
                  <View style={styles.profileInfoBoxText}>
                    <Text style={styles.body1}>정답</Text>
                    <Text style={styles.body1}>36</Text>
                  </View>
                </View>
                <View style={styles.profileInfoBox}>
                  <View style={styles.profileInfoBoxText}>
                    <Text style={styles.body1}>게시물</Text>
                    <Text style={styles.body1}>16</Text>
                  </View>
                </View>
                <View style={styles.profileInfoBox}>
                  <View style={styles.profileInfoBoxText}>
                    <Text style={styles.body1}>팔로워</Text>
                    <Text style={styles.body1}>166</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.controlLine}>
              <HashButton />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default function(props) {
  const navigation = useNavigation();

  return <Room {...props} navigatetion={navigation} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer: {height: 180, backgroundColor: '#f7f9fe'},
  infoLine: {
    height: 124,
    backgroundColor: '#44f9fe',
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#a6b1e1',
  },
  profileName: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 12,
  },
  profileInfoWarp: {
    width: 160,
    flexDirection: 'row',
  },
  profileInfoBox: {
    flex: 1,
  },
  profileInfoBoxText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlLine: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  Headline: {
    color: '#3e4554',
    fontSize: 28,
    fontWeight: 'bold',
  },
  body1: {
    color: '#3e4554',
    fontSize: 16,
    fontWeight: 'bold',
    height: 24,
    lineHeight: 24,
  },
});
