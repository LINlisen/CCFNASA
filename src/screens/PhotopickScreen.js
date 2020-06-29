import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Photopick from "../compenents/Photopick";

const PhotopickScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Photopick 
            navigation={navigation}/>
       </View>
          
  );
};

export default PhotopickScreen;
