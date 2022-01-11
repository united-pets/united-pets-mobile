import React, { Component } from "react";
import { Button, StyleSheet, View, Image,Text, } from "react-native";

export default class ButtonBasics extends Component {
  _onPressButton() {
    alert("You tapped the button!");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Image
            style={styles.logo1}
            source={require("../assets/scroll.png")}
          />
        </View>
        <View style={styles.buttonContainer}>
          {/* <Image
            style={styles.logo}
            source={require("../assets/lostpet.jpg")}
          /> */}
          <Button
            onPress={this._onPressButton}
            title="I'm looking for my pet"
            color="#841584"
          />
          <Text style={styles.text}>I'M LOOKING FOR MY PET</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* <Image
            style={styles.logo1}
            source={require("../assets/breeder_img04.jpg")}
          /> */}
          <Button onPress={this._onPressButton} title="I found a lost pet" />
          <Text style={styles.text}>I FOUND A LOST PET</Text>
        </View>
        <View style={styles.buttonContainer}>
          {/* <Image
            style={styles.logo1}
            source={require("../assets/breeder_img04.jpg")}
          /> */}
          <Button onPress={this._onPressButton} title="I found a lost pet" />
          <Text style={styles.text}>All LOST PETS POSTS </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 8,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    marginLeft: 0,
    marginRight: 200,
    height: 150,
    width: 150,
  },
  logo1: {
      marginLeft: 0,
      marginTop: 30,
    // marginBottom: 250,
    height: 150,
    width: 400,
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red",
    borderRadius:30,
  },
});
