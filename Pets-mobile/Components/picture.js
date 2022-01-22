import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput,Button } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import LostPetForm from './LostPetForm';
export default function Picture() {
  const [hasPermission, setHasPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  const takePicture = async () => {
    if (cameraRef) {
      console.log('in take picture');
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        return photo;
      } catch (e) {
        console.log(e);
      }
    }
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true
    });
    if (!result.cancelled) {
        let item = {
            id: Date.now(),
            url: result.uri,
        };
       
        // newDataImg.push(item);
        // this.setState({ prescriptionsList: newDataImg });
        // this.setState({ image: result.uri })
      
        let base64Img = `data:image/jpg;base64,${result.base64}`
        
        let apiUrl = 'https://api.cloudinary.com/v1_1/studentst/image/upload';
      
        let data = {
          "file": base64Img,
          "upload_preset": "lxhgxbut",
        }
      
        fetch(apiUrl, {
          body: JSON.stringify(data),
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
        }).then(async r => {
            let data = await r.json()
            console.log('hhhhh',data.secure_url)
            setImage(data.secure_url)

            return data.secure_url
      }).catch(err=>console.log(err))
    }
  };
  return (
    <View
      style={{
        marginTop:10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {useCamera ? (
        <View>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={{ flex: 9 }}></View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setUseCamera(false);
                }}>
                <Text style={styles.text}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.text}>Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log('in take pic');
                  const r = await takePicture();
                  setUseCamera(false);
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  console.log('response', r.uri);
                }}>
                <Text style={styles.text}>PICTURE</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      ) : (
        <>
          <View style={{ width: '100%' }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log('in pick photo');
                  const r = await pickImage();
                  console.log('response', JSON.stringify(r));
                }}>
                <Text style={styles.text}> PICK PICTURE </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log('in pick camera');
                  setUseCamera(true);
                }}>
                <Text style={styles.text}> PICK CAMERA </Text>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
              {true && (
                <Image
                  source={{ uri: image }}
                  style={{ width: 300, height: 300, backgroundColor: '#fff' }}
                />
              )}
            </View>
            <LostPetForm imageUri = {image}/>
          </View>
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    minWidth: '100%',
    flex: 1,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    margin: 8,
    backgroundColor:'#FCA500',
    borderRadius:25,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});