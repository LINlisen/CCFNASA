import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView} from "react-native";
import Post from "../compenents/Post";

const PostScreen = ({navigation}) => {
  return (
   
      <View style={{height:1000}}>
      <Post 
            navigation={navigation}/>
       </View>
          
  );
};

export default PostScreen;
