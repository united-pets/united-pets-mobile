import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './SearchBar';
// import SignUp from './signup';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>hello from alla </Text> */}
      {/* <SignUp/> */}
      <SearchBar/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
