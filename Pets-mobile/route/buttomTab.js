import {
  View,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaViewBase,
  SafeAreaView,
  Text
}from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from  '../Components/HomePage'
import Profile from '../Components/profile'
import Posts  from '../Components/Posts';
import LostPetForm from '../Components/LostPetForm';
import Add from '../Components/picture'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel:false,
      Style:{
      position:'absolute',
      bottom:25,
      left:20,
      elevation:0,
      backgroundColor:'#ffffff',
      borderRadius:15,
      height:90,
      ...StyleSheet.shadow
      }
    }}>
      <Tab.Screen name={"foundPet"} component={Home}  options={
        {
          headerShown: false,
          tabBarIcon:({focused})=>(
            <View>
             <FontAwesome5
                name="home"
                size={20}
              ></FontAwesome5>
           
            </View>
          )
        }
      }/>
      <Tab.Screen name={"home"} component={Posts} 
      options={
        {
          headerShown: false,
          tabBarIcon:({focused})=>(
            <View>
             <FontAwesome5
                name="paw"
                size={20}
              ></FontAwesome5>
           </View>
          )
        }
      }/>
      <Tab.Screen name={"found"} component={Add}
      options={
        {
          headerShown: false,
          tabBarIcon:({focused})=>(
            <View>
               <FontAwesome5
                name="plus-square"
                size={20}
              ></FontAwesome5>
           
            </View>
          )
        }
      }/>
      <Tab.Screen name={"profile"} component={Profile} 
      options={
        {
          headerShown: false,
          tabBarIcon:({focused})=>(
            <View>
               <FontAwesome5
                name="user-alt"
                size={20}
              ></FontAwesome5>
         
            </View>
          )
        }
      }/>
    </Tab.Navigator>
  );
}

// const style =StyleSheet.create({
// shadow:{
//   shadowColor:'#7F5DF0',
//   shadowOffset:{
//     width : 0,
//     height:10,
//   },
//   shodowRadius:3.5,
//   shodowOpacity : 0.25,
//   elevation:5
// }
// })