import React from 'react';
import {
  LogBox,
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

function Home(props) {
  return (
    <View>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    marginTop: 32,
    textAlign:'center',
    paddingHorizontal: 24,
  }
});
export default Home;
