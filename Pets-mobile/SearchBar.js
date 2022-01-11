import React from "react";
import axios from "axios";
import { StyleSheet,View,Text } from 'react-native';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
 
  componentDidMount() {
    axios.get('http://localhost:3000/getAll').then(({data})=>{
        console.log("hhhhhhh",data)
    })}
   
  



 render() {
  return (
  <View style={styles.container}>
  <Text>Hello, alla</Text>
  </View>
  )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

