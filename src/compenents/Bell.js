import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native";




const Bell =({navigation})=>{
  
    return(
        <View style={styles.all}>
           <Image source={require('../../img/img_bellheader.png')}
                    style={styles.header}
            />
            <TouchableOpacity>
                <Image source={require('../../img/btn_headerright.png')}
                        style={styles.headerright}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../img/btn_bell.png')}
                        style={styles.bell}/>
            </TouchableOpacity>
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
    bell:{
        width:221,
        height:221,
        marginLeft:105.5,
        marginTop:172
    }
  });
  
  export default  Bell;