import React from 'react'
import axios from 'axios'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    firstName: '', lastName: '', email: '', phoneNumber: '' , 
    password: '', adress: '', imageUrl: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  SignUp = async () => {
    const { firstName, lastName, email, phoneNumber , password ,adress , imageUrl } = this.state
    
    try {

        const res = await axios
        .post("http://localhost:3000/signup", {
          firstName : firstName,
          lastName:lastName,
          email:email,
          phoneNumber:phoneNumber,
          password:password ,
          adress:adress,
          imageUrl:imageUrl
        })
    //   // here place your signup logic
    //   console.log('user successfully signed up!: ')
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
// SingUp=() => {
//     // alert("email: " + email + " password: " + pass);}
//     // console.log(firstName, lastName, email, phoneNumber , password ,adress , imageUrl)
//     console.log(this.state);
//    axios
//       .post("http://localhost:3000/signup", {
//         firstName : this.firstName,
//         lastName:this.lastName,
//         email:this.email,
//         phoneNumber:this.phoneNumber,
//         password:this.password ,
//         adress:this.adress,
//         imageUrl:this.imageUrl

//       })
    //   .then((response) => {
    //     console.log("success", response);
    //   })
//       .catch((err) => {
//         throw err;
//       });
//   };


 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='firstName'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('firstName', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='lastName'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('lastName', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
          
        />
        <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor='white'
        onChangeText={val => this.onChangeText('password', val)}
        />
         <TextInput
          style={styles.input}
          placeholder='phoneNumber'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('phoneNumber', val)}
        />
         <TextInput
          style={styles.input}
          placeholder='adress'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('adress', val)}
        />
         <TextInput
          style={styles.input}
          placeholder='imageUrl'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('imageUrl', val)}
        />

        <Button
          title='Sign Up'
          onPress={this.SignUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    input: {
    width: 350,
    height: 55,
    backgroundColor: '#42A5F5',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})