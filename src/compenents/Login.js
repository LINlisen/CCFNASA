import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";




const Login =({})=>{
    return(
        <View style={styles.all}>
            <Image source={require("../../img/img_backimg.png")}
                    style={styles.backimg}/>
        </View>
    )
};
const styles = StyleSheet.create({
    all:{
        backgroundColor:"white",
        height:900
    },
    backimg:{
        width:688.67,
        height:499.17,
        marginTop:0,
        marginLeft:-100
    }
  });
  
  export default  Login;