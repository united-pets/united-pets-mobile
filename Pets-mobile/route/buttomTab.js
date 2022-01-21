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
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";


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
      <Tab.Screen name={"foundPet"} component={Posts} options={
        {
          tabBarIcon:({focused})=>(
            <View>
              {/* <Image /> */}
              <Text>home</Text>
            </View>
          )
        }
      }/>
      <Tab.Screen name={"home"} component={Home} 
      options={
        {
          tabBarIcon:({focused})=>(
            <View>
              {/* <Image /> */}
              <Text>lost</Text>
            </View>
          )
        }
      }/>
      <Tab.Screen name={"add lost pet"} component={LostPetForm} 
      options={
        {
          tabBarIcon:({focused})=>(
            <View>
              {/* <Image /> */}
              <Text>add </Text>
            </View>
          )
        }
      }/>
      <Tab.Screen name={"profile"} component={Profile} 
      options={
        {
          tabBarIcon:({focused})=>(
            <View>
              {/* <Image /> */}
              <Text>profile</Text>
            </View>
          )
        }
      }/>
    </Tab.Navigator>
  );
}

const style =StyleSheet.create({
shadow:{
  shadowColor:'#7F5DF0',
  shadowOffset:{
    width : 0,
    height:10,
  },
  shodowRadius:3.5,
  shodowOpacity : 0.25,
  elevation:5
}
})