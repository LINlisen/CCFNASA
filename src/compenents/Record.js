import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native";




const Post =({navigation})=>{
  
    return(
        <View style={styles.all}>
           <Image source={require('../../img/img_bellheader.png')}
                    style={styles.header}
            />
            <TouchableOpacity
                onPress={()=>navigation.navigate('Record')}>
                <Image source={require('../../img/btn_headerright.png')}
                        style={styles.headerright}
                />
            </TouchableOpacity>
            <Text style={styles.title}>紀錄表</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"white",
        height:900,
        
    },
    header:{
        width:414,
        height:88
    },
    headerright:{
        width:20.91,
        height:19.13,
        marginTop:-37.03,
        marginLeft:363.8
    },
    title:{
        fontSize:20,
        width:82,
        height:27,
        marginTop:-38,
       marginLeft:177,
       color:"white"
    }
  });
  
  export default  Post;