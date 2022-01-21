import React, { Component } from "react";

import {
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

export default function PetsWalker({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo1} source={require("../assets/scroll.png")} /> */}
      <View
        style={{
          flex: 0.5,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 330,
            borderRadius: 20,
            backgroundColor: "#9F654F26",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 135,
          }}
        >
          <Text
            style={{
              color: "Black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Daily Pets Walk
          </Text>
          <Image
            style={styles.Timage}
            source={require("../assets/header-walker.png")}
            resizeMode="contain"
            style={{ flex: 0.6 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.5,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 330,
            borderRadius: 20,
            backgroundColor: "#9F654F26",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 135,
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            weekly pets walk
          </Text>
          <Image
            style={styles.Timage}
            source={require("../assets/header-walker.png")}
            resizeMode="contain"
            style={{ flex: 0.8 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.5,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            width: 330,
            borderRadius: 20,
            backgroundColor: "#9F654F26",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 135,
          }}
        >
          <Text
            style={{
              color: "Black",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 25,
            }}
          >
            Personnalised Offer
          </Text>
          <Image
            style={styles.Timage}
            source={require("../assets/header-walker.png")}
            resizeMode="contain"
            style={{ flex: 0.8 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 0.7,
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  Timage: {
    width: 200,
    height: 200,
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
    borderRadius: 30,
  },
});
