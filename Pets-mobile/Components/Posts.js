
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
export default function Posts() {
  useEffect(()=>fetchPostsData(),[])

  const [posts, setPosts] = useState([]);
  console.log(posts);
  const fetchPostsData = () => {
    axios
      .get("http://192.168.11.139:3000/getAll")
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
      {/* <Text style={styles.text}>Lost Pets</Text>
      <Button
        title="get data"
        onPress={fetchPostsData}
      /> */}
      <View>
        {/* <Text>{posts.map(item => (
                //   <Image/>
                  <Text> {item.AnimalName}</Text>
                  
              ))}</Text> */}

        <ScrollView style={{ flexGrow: 1 }}>
          {/* <MarkedList counterRenderer={disc}> */}
          {posts.map((item,i) => (
            <View style={styles.mycard} key='key' >
              <Card>
                <Card.Title
                  title={item.AnimalName}
                  subtitle={item.AnimalName}
                />
                <Card.Cover source={{ uri: item.AnimalImage }} />
                <Card.Content>
                  <Title>Last seen in {item.AnimalLocalisation}</Title>
                  <Paragraph>{item.AnimalDescription}</Paragraph>
                </Card.Content>
              </Card>
            </View>
          ))}
          {/* </MarkedList> */}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
        marginTop: 0,
    marginBottom:0,
    width:'100%'
  },
  mycard: {
    flexDirection: "row",
      marginTop: 30,
      marginRight: 25,
    marginLeft:30,
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
});
