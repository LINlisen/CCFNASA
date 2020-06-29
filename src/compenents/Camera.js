import React, { useState, useEffect,useRef  } from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { MediaTypeOptions } from 'expo-image-picker';
export default function App(navigation) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
 const uri= MediaLibrary.getAssetInfoAsync("localUri");
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
     
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;}}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              
            
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 40,marginTop:840,marginLeft:20,  color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync()
              
          
              console.log('photo', photo);
            }
          }}>
              <Image style={{width:60,height:60,marginTop:810,marginLeft:80}}
                        source={require('../../img/bt_takephoto.png')}/>
        </TouchableOpacity>
          <TouchableOpacity onPress={async()=>{FileSystem.deleteAsync("file:///var/mobile/Containers/Data/Application/9160EF1D-49BA-433E-9EE8-DE902E4B8C37/Library/Caches/ExponentExperienceData/%2540linsen%252FOTC1/Camera/8ABEB35A-E980-4F05-A352-C292D481B84D.jpg"






,true)}}>
              <Text style={{fontSize:100}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}