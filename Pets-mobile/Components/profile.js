import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  // Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaViewBase,
  SafeAreaView,
} from "react-native";
import{ Avatar , Title , Caption , Text , TouchableOpacity , TouchableRipple} from 'react-native-paper'
import  Icon  from "react-native-vector-icons/MaterialCommunityIcons";
export default function profile({navigation}) {
  
return(
  <SafeAreaView style={styles.container} >

  <View styles={styles.userInfoSection}>
   <View style={{ flexDirection:'row' , marginTop:'15'}}>
     <Avatar.Image source={{
       uri : 'https://www.google.com/search?q=image+de+anonyme&client=opera-gx&sxsrf=AOaemvI9T6nz1pcbDMeHPgNuG9Xr4_TV2Q:1642759030609&tbm=isch&source=iu&ictx=1&vet=1&fir=F93sgwCMyD0y7M%252CDWLLjX9GsIUILM%252C_%253BcYBcibCp2vJGUM%252CHL0vwxI9543HzM%252C_%253BqX0Tqp28Xq54xM%252CHL0vwxI9543HzM%252C_%253BzXmdXP88C02lVM%252CDWLLjX9GsIUILM%252C_%253BonwZO-aGWbYFdM%252CHL0vwxI9543HzM%252C_%253BBU61O1hhUb-4qM%252CaOHRKxHMprIPtM%252C_%253Bm1cQC2Fyf7qUlM%252CKUrqDhkyOivhXM%252C_%253BjXyQyfdf9coeIM%252CDWLLjX9GsIUILM%252C_%253B5ziM61AjMDMKwM%252CKUrqDhkyOivhXM%252C_%253BsJiem4_xSvPqAM%252CHL0vwxI9543HzM%252C_%253Bq7ux2tltcsewyM%252CDWLLjX9GsIUILM%252C_%253BHrCdxGUNIOHHmM%252CY3fFySXQ4D5iUM%252C_%253BW-iowIcoLZJYkM%252CwPEpHlv0MFiDQM%252C_%253BO8NsVQPBDbFY5M%252Cu4KCT7sIRd3GGM%252C_%253BTDkAiZXNl7JPzM%252Cmgv3Mao67A4qDM%252C_%253BLCbVKJmhmJr5NM%252CY3fFySXQ4D5iUM%252C_&usg=AI4_-kT49gbYlVqvLHb-Zo9SOZBfzZUwCw&sa=X&ved=2ahUKEwjX4uGjysL1AhWvsKQKHcUdDfMQ9QF6BAgZEAE#imgrc=onwZO-aGWbYFdM'
     }}
     size={80}
     />
     <View style={{marginLeft:20}}>
       <Title style={[styles.title , {marginTop:'15', marginBottom:'5'} ]}>hello hello</Title>
       <Caption style={styles.caption}>caption</Caption>
      </View>
     </View>
  </View>

<View style={styles.userInfoSection}>
<View style={styles.row}>
  <Icon name="map-marker-radius" color="#777777" size={20} />
  <Text style={{color: "#777777", marginLeft : 20}} > location </Text>
</View>
<View style={styles.row}>
  <Icon name="phone" color="#777777" size={20} />
  <Text style={{color: "#777777", marginLeft : 20}} > location </Text>
</View><View style={styles.row}>
  <Icon name="email" color="#777777" size={20} />
  <Text style={{color: "#777777", marginLeft : 20}} > location </Text>
</View>
</View>

<View style={styles.infoBoxWrapper}>
  <View style={[styles.infoBox , {
    borderRightColor:'#dddddd',
    borderRightWidth:1
  }]}>
    <Title>2</Title>
    <Caption>pets</Caption>
  </View>
  <View style={styles.infoBox}>
    <Title>3</Title>
    <Caption> posts </Caption>
  </View>
</View>
<View style={styles.menuWrapper}>
 
  <TouchableRipple style={styles.menuItem} onPress={()=>navigation.navigate('UpdateProfile')}>
   <Text style={styles.menuItemText}>
   <Icon name='heart-outline' color="#FF6347" size={25} />
     your Pets
   </Text>
  </TouchableRipple>
  <TouchableRipple style={styles.menuItem} onPress={()=>{}}>
   <Text style={styles.menuItemText}>
   <Icon name='heart-outline' color="#FF6347" size={25} />
     your Posts
   </Text>
  </TouchableRipple>
  <TouchableRipple style={styles.menuItem} onPress={()=>{}}>
   <Text style={styles.menuItemText}>
   <Icon name='heart-outline' color="#FF6347" size={25} />
     contact us
   </Text>
  </TouchableRipple>
  <TouchableRipple style={styles.menuItem} onPress={()=>{}}>
   <Text style={styles.menuItemText}>
   <Icon name='heart-outline' color="#FF6347" size={25} />
     settings
   </Text>
  </TouchableRipple>
</View>
</SafeAreaView>
)
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  userInfoSection:{
    paddingHorizontal:30,
    marginBottom:25,
  },
  title:{
    fontSize : 24,
    fontWeight : 'bold'
  },
  caption:{
    fontSize:14,
    lineHeight:14,
    fontWeight:'500'
  },
  row:{
    flexDirection : 'row',
    marginBottom:10,
  },
  infoBoxWrapper:{
  borderBottomColor : '#dddddd',
  borderBottomWidth:1,
  borderTopColor:'#dddddd',
  borderTopWidth:1,
  flexDirection: 'row',
  height:100,
  },
  infoBox:{
    width:'50%',
    alignItems:'center',
    justifyContent : 'center',
  },
  menuWrapper:{
    marginTop:10,
  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30,
  },
  menuItemText:{
    color:'#777777',
    marginLeft:20,
    fontWeight:'600',
    fontSize:16,
    lineHeight:26
  },
})