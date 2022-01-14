import React from "react";
import axios from "axios";
import { StyleSheet,View,Text, SafeAreaView , Image,TextInput  } from 'react-native';
import { Card } from 'react-native-paper';
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
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
        
    }).catch(err => console.log(err))
  }
   
  



 render() {
  return (
    
  <View style={styles.container}>
  {/* <Text>Hello, alla</Text> */}
    
  <SafeAreaView style={styles.container}>
  {this.state.items.map((item,index)=>{
    console.log(item);
    return(
      <View style={styles.paragraph} key = {index}>
        <Card style={styles.card} key = {index} >
    <Image  style={{height: 300, width: 400 ,}}  source = {item.AnimalImage}/>
    <Text>Animal Name : {item.AnimalName}</Text>
    <Text >Animal Description : {item.AnimalDescription} </Text>
    <Text>Animal Localisation : {item.AnimalLocalisation}</Text>
    <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        // onChangeText={text => setText(text)}
        // defaultValue={text}
      />
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
    flex: 2,
    justifyContent: 'center',
    padding: 25,
    // width : 750,
    backgroundColor: '#275c76',
  },
  paragraph: {
    fontSize: 150,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 25
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fca500',
    height:300,
    width:400
  }
});
