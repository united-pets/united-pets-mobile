import React, { Component } from "react";
// import {link} from "react-router-dom"
import {
  Button,
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Communications from "react-native-communications";
// import { phonecall, email, text, web } from "react-native-communications";
import { Paragraph } from "react-native-paper";
export default function PetsSetting({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo1} source={require("../assets/scroll.png")} /> */}
      <ScrollView style={{ flexGrow: 0.8 }}>
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
              backgroundColor: "#9D68532B",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
            }}
          >
            <Text
              style={{
                color: "Black",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Pack setting by hour
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/pet-care-dog-sitting-services.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
              You have an immergency you don't know were to left your lovely pet
              we offere you a package of setting by hour and you can enjoy our
              pick from home offre
            </Paragraph>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.phonecall("0021624217104", true)}
              >
                <Text style={styles.buttonTextStyle}> Call </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.text("0021624217104")}
              >
                <Text style={styles.buttonTextStyle}>MSG</Text>
              </TouchableOpacity>
            </View>
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
              backgroundColor: "#9D68532B",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Pack setting by day
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/pet-care-dog-sitting-services.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
              You are leaving the house for a one day orfew days we offere you a
              package of setting by day to help you enjoy your trip or your job
            </Paragraph>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.phonecall("0021624217104", true)}
              >
                <Text style={styles.buttonTextStyle}> Call </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.text("0021624217104")}
              >
                <Text style={styles.buttonTextStyle}>MSG</Text>
              </TouchableOpacity>
            </View>
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
              backgroundColor: "#9D68532B",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Pack setting by week
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/pet-care-dog-sitting-services.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
              You are leaving the house for one week or more we offere you a
              package of setting by week
            </Paragraph>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.phonecall("0021624217104", true)}
              >
                <Text style={styles.buttonTextStyle}> Call </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.text("0021624217104")}
              >
                <Text style={styles.buttonTextStyle}>MSG</Text>
              </TouchableOpacity>
            </View>
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
              backgroundColor: "#9D68532B",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 250,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                color: "Black",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Pack setting personalised
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/pet-care-dog-sitting-services.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
              You are leaving the house for determin or indetermin period we
              offere you a personnalised package that fit your need
            </Paragraph>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.phonecall("0021624217104", true)}
              >
                <Text style={styles.buttonTextStyle}> Call </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.buttonStyle}
                onPress={() => Communications.text("0021624217104")}
              >
                <Text style={styles.buttonTextStyle}>MSG</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 30,
    marginTop: 50,
  },
  Timage: {
    width: 200,
    height: 200,
  },
  //   buttonContainer: {
  //     margin: 8,
  //   },

  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 70,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "red",
    borderRadius: 30,
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 20,
    marginRight:8,
    marginBottom: 5,
    // padding: 10,
    width: 70,
    height: 40,
    backgroundColor: "#39CB23",
    borderRadius: 15,
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
});
