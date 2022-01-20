import{React,useState,useEffect}  from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import Constants from "expo-constants";
import { Camera } from "expo-camera";

// You can import from local files
 

// or any pure javascript modules available in npm
//

export default function Cameracomp() {
  const [hasCameraPermission, setHasCameraPermission] = useEffect(null);
  const [camera, setCamera] = useState(null);
  const [Image, setImage] = useState(null);
  const [type, setType] = useState(camera.Constants.type);
  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasCameraPermission(cameraStatus.status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  };
  if (hasCameraPermission === false) {
    return <Text>No camera access</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio="1:1"
        />
      </View>
      <Button>
        title="Flip Camera" onPress=
        {() => {
          setType(
            type === camera.Constants.type.Back
              ? camera.Constants.type.front
              : camera.Constants.type.back
          );
        }}
      </Button>
      <Button title="take Picture" onPress={() => takePicture} />
    </View>
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  
});
