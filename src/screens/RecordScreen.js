import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Record from "../compenents/Record";
import Map from "../compenents/MAP";
const RecordScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Record 
            navigation={navigation}/>
      
       </View>
          
  );
};

export default RecordScreen;
