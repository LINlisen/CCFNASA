import React, { useContext } from "react";
import { View, FlatList,Text,ScrollView,StyleSheet} from "react-native";
import Post from "../compenents/Post";

const PostScreen = ({navigation}) => {
  return (
   <ScrollView style={{flex:1}}>
      <View>
      <Post 
            navigation={navigation}/>
       </View>
       </ScrollView>
  );
};

export default PostScreen;
