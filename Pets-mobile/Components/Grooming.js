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
import { Paragraph } from "react-native-paper";
export default function Grooming({ navigation }) {
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
              width: 320,
              borderRadius: 20,
              backgroundColor: "#FAECA896",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
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
              Breed-specific Haircuts
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/groooming.png")}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
            <Paragraph>
              Regular grooming is essential to your pet's health as it helps
              prevent skin issues such as matting.
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
                onPress={() =>
                  Communications.email(
                    ["unitedpetsofficial@yahoo.com"],
                    null,
                    null,
                    "take Appointment",
                    "Pets Grooming appointment"
                  )
                }
              >
                <Text style={styles.buttonTextStyle}>Email</Text>
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
              width: 320,
              borderRadius: 20,
              backgroundColor: "#FAECA896",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
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
              Baths for Every Breed
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/groooming.png")}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
            <Paragraph>
              We’ll suds away dirt, oil and debris plus brushout to help skin
              and coats of all types look and feel great.
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
                onPress={() =>
                  Communications.email(
                    ["unitedpetsofficial@yahoo.com"],
                    null,
                    null,
                    "take Appointment",
                    "Pets Grooming appointment"
                  )
                }
              >
                <Text style={styles.buttonTextStyle}>Email</Text>
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
              width: 320,
              borderRadius: 20,
              backgroundColor: "#FAECA896",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
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
              Customized Packages
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/groooming.png")}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
            <Paragraph>
              Upgrade their visit with packages designed to target specific
              needs such as de-shedding, dry and sensitive skin care and more.
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
                onPress={() =>
                  Communications.email(
                    ["unitedpetsofficial@yahoo.com"],
                    null,
                    null,
                    "take Appointment",
                    "Pets Grooming appointment"
                  )
                }
              >
                <Text style={styles.buttonTextStyle}>Email</Text>
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
              width: 320,
              borderRadius: 20,
              backgroundColor: "#FAECA896",
              // flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: 150,
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
              Walk-In Services
            </Text>
            <Image
              style={styles.Timage}
              source={require("../assets/groooming.png")}
              resizeMode="contain"
              style={{ flex: 1 }}
            />
            <Paragraph>
              Help care for your pet with essential services such as nail
              trimming, teeth-brushing and gland expressions.
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
                onPress={() =>
                  Communications.email(
                    ["unitedpetsofficial@yahoo.com"],
                    null,
                    null,
                    "take Appointment",
                    "Pets Grooming appointment"
                  )
                }
              >
                <Text style={styles.buttonTextStyle}>Email</Text>
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
