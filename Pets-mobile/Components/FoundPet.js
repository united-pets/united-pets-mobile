import React, { Component } from "react";
import {link} f
import {
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default class ButtonBasics extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        
          <Image
            style={styles.logo1}
            source={require("../assets/scroll.png")}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 250,
                borderRadius: 20,
                backgroundColor: "#FAAA08",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                I'M LOOKING FOR MY PET
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 250,
                borderRadius: 20,
                backgroundColor: "#FAAA08",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                I'FOUND A LOST PET
              </Text>
            </TouchableOpacity>
          </View>
     
       
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                width: 250,
                borderRadius: 20,
                backgroundColor: "#FAAA08",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                height: 60,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
               ALL LOST PETS
              </Text>
            </TouchableOpacity>
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
