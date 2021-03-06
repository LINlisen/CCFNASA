import React, { useState, useEffect,useRef,useContext  } from 'react';
import { Text, View, TouchableOpacity,Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import { MediaTypeOptions } from 'expo-image-picker';
import { PhotoContext } from "../stores/photoasset";

export default function App(navigation) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { photouriState } = useContext(PhotoContext);
  const [photouri, setphotouri] = photouriState;
//  const uri= MediaLibrary.getAssetInfoAsync("localUri");
const [uri,seturi] = useState('');
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
  function preview (){
   
    <View>
    <Image style={{flex:1,width:800,height:800}}
            source={{uri:uri}}/>
            </View>
    
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref => {
        setCameraRef(ref) ;} }
        >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
           
          }}>
            <TouchableOpacity onPress={preview()}>
            <Image style={{width:80,height:80,marginTop:780,marginLeft:30}}
                        source={{uri:uri}}/>
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={async() => {
            if(cameraRef){
              let photo = await cameraRef.takePictureAsync(uri)
              
              seturi(photo.uri);
              setphotouri(photo.uri);
              console.log('photo',uri);
               
            }
          }}>
              <Image style={{width:60,height:60,marginTop:810,marginLeft:68}}
                        source={require('../../img/bt_takephoto.png')}/>
              
        </TouchableOpacity>
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
            <Text style={{ fontSize: 40,marginTop:800,marginLeft:90,  color: 'white' }}> Flip </Text>
          </TouchableOpacity>
         {/* <TouchableOpacity onPress={async()=>{FileSystem.deleteAsync("file:///var/mobile/Containers/Data/Application/9160EF1D-49BA-433E-9EE8-DE902E4B8C37/Library/Caches/ExponentExperienceData/%2540linsen%252FOTC1/Camera/8ABEB35A-E980-4F05-A352-C292D481B84D.jpg"






,true)}}>
              <Text style={{fontSize:100}}>Delete</Text>
        </TouchableOpacity>*/}
        </View>
      </Camera>
    </View>
  );
}