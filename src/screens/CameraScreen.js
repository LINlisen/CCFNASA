import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Camera from "../compenents/Camera";

const CameraScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Camera 
            navigation={navigation}/>
       </View>
          
  );
};

export default CameraScreen;
