import React from "react";
import axios from "axios";
import { StyleSheet,View,Text,SafeAreaView,Image  } from 'react-native';
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
    axios.get('http://localhost:3000/getAll')
    .then(({data})=>{
        console.log("hhhhhhhyu",data)
        this.setState({
          items: data
        });
        console.log('aaaaaaaaaa',this.state.items);
        
    })
    .catch(err => 
      console.log(err)
    )
  };
 render() {
  return (
  <View style={styles.container}>
    {this.state.items.map((item,index)=>{
    return(
     <View style={styles.paragraph} key = {index}>
     <Card style={styles.card} key = {index} >
     <Image  style={styles.Image}  source = {item.AnimalImage}/>
     <Text>Animal Name : {item.AnimalName}</Text>
     <Text>Animal Description : {item.AnimalDescription} </Text>
     <Text>Animal Localisation : {item.AnimalLocalisation}</Text>
     </Card>
     </View> 
    )})}
  </View>
  )
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    padding: 25,
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
    width:400,
    borderRadius: 40,
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image :{
    height: 300,
     width: 400 , 
     borderRadius: 40,
    elevation: 10,

  }
});
