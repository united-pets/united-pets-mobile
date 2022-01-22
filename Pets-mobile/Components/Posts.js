
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import disc from '@jsamr/counter-style/presets/disc';
import MarkedList from '@jsamr/react-native-li';

import { Avatar, Card, Title, Paragraph } from "react-native-paper";
import ImagedCardView from "react-native-imaged-card-view";
import Communications from "react-native-communications";
// import { phonecall, email, text, web } from "react-native-communications";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const fetchPostsData = () => {
    axios
      .get("http://192.168.11.189:3000/getAll")
      .then((response) => {
        const posts = response.data;
        setPosts(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lost Pets</Text>
      <Button title="get data" onPress={fetchPostsData} />

      <View>
        {/* <Text>{posts.map(item => (
                //   <Image/>
                  <Text> {item.AnimalName}</Text>
                  
              ))}</Text> */}

        <ScrollView style={{ flexGrow: 1 }}>
          {/* <MarkedList counterRenderer={disc}> */}
          {posts.map((item, i) => (
            <View style={styles.mycard} key="key">
              <Card>
                <Card.Title
                  title={item.AnimalName}
                  subtitle={item.AnimalName}
                />
                <Card.Cover source={{ uri: item.AnimalImage }} />
                <Card.Content>
                  <Title>Last seen in {item.AnimalLocalisation}</Title>
                  <Paragraph>{item.AnimalDescription}</Paragraph>
                  <View style={styles.contact}>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.buttonStyle}
                      onPress={() =>
                        Communications.phonecall("0021624217104", true)
                      }
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
                </Card.Content>
              </Card>
            </View>
          ))}
          {/* </MarkedList> */}
        </ScrollView>
      </View>
    </View>
  );
  // useEffect(()=>{fetchPostsData()},[])
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 150,
  },
  mycard: {
    flexDirection: "row",
    marginTop: 30,
    marginRight: 25,
    marginLeft: 30,
  },
  text: {
    color: "#fca500",
    fontSize: 30,
    lineHeight: 60,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "red",
    //borderRadius:30,
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
  contact: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
