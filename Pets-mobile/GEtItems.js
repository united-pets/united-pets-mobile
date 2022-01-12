import React from "react";
import axios from "axios";
import { StyleSheet,View,Text, SafeAreaView , Image } from 'react-native';
import { Card } from 'react-native-paper';
export default class GEtItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.componentDidMount = this.componentDidMount.bind(this)
  }
 
  componentDidMount() {
    axios.get('http://localhost:3000/getAll').then(({data})=>{
        console.log("hhhhhhhyu",data)
        this.setState({items: data})
        console.log('aaaaaaaaaa',this.state.items);
        
    })}
   
  



 render() {
  return (
    
  <View style={styles.container}>
  {/* <Text>Hello, alla</Text> */}
  <SafeAreaView style={styles.container}>
  {this.state.items.map((item,index)=>{
    return(
      <View style={styles.container} key = {index}>
        <Card key = {index}  >
    <Text>Animal Image : {item.AnimalImage}</Text>
    <Text>Animal Name : {item.AnimalName}</Text>
    <Text>Animal Description : {item.AnimalDescription} </Text>
    <Text>Animal Localisation : {item.AnimalLocalisation}</Text>
    
    </Card>
    </View>
  )})}
    </SafeAreaView>
  </View>
  )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20
  },
});
