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
              backgroundColor: "#9F654F26",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
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
              source={require("../assets/header-walker.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
             If you need a pets walker for one hour or more you canschedual a walk by hour 
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
              backgroundColor: "#9F654F26",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
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
              Pack Walker by day
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/header-walker.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
            You don't have time to walk your pets every day you can take this dayly package 
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
              backgroundColor: "#9F654F26",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
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
              Pack walker by week
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/header-walker.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
              You want to change your pets walk programme every week you can take the we weekly package 
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
              backgroundColor: "#9F654F26",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 200,
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
              Pack Walker personalised
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/header-walker.png")}
              resizeMode="contain"
              style={{ flex: 0.3 }}
            />
            <Paragraph>
              You have a special Programme for your pets walk pick this package and personnalize your calander 
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
    marginRight: 8,
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
