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
    <View style={styles.div}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  div: {
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  text: {
    marginTop: 0,
    textAlign: 'center',
    fontSize: 18,
  },
});
export default Home;
