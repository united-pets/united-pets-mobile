import * as React from "react";
import { ImageBackground,Text, View, StyleSheet, Image , Button} from "react-native";

const image1 = {
  uri: "https://w7.pngwing.com/pngs/885/839/png-transparent-paw-prints-paw-dog-footprint-printing-cat-dog-animals-pet-monochrome.png",
};
export default function AssetExample({navigation}) {
  const navigatetologin = () =>{
  navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      {/* <ImageBackground source={image1} resizeMode="cover" style={styles.image1}>
      </ImageBackground> */}
      <Image
        style={styles.logo}
        source={require("../assets/breeder_img04.jpg")}
      />
      <Text style={styles.text}>Welcome</Text>
      <Button title="join us" onPress={navigatetologin}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    borderColor: "white",
    borderRadius: 25,
    borderWidth: 5,
    height: 400,
    width: 250,
  },
  image1: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "#fca500",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "red",
    //borderRadius:30,
  },
});
