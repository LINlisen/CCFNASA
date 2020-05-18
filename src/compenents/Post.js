import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native";




const Post =({navigation})=>{
  const [value,onChangeText]= React.useState('想記錄點什麼?');
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
            <Text style={styles.title}>生活紀錄</Text>
            <TextInput
                style={styles.new}
                onChange={text=>onChangeText(text)}
                value={value}
                returnKeyLabel="done"
                />
            <TouchableOpacity>
                <Image source={require('../../img/btn_create.png')}
                        style={styles.create}
                />
            </TouchableOpacity>
            <View style={styles.post}>
                
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"#E8F5FF",
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
       marginLeft:165,
       color:"white"
    },
    new:{
        width:350,
        height:46,
        borderRadius:26,
        paddingLeft:20,
        marginTop:40,
        marginLeft:32,
        backgroundColor:"white"
    },
    create:{
        width:40,
        height:40,
        marginLeft:335,
        marginTop:-40
    }
  });
  
  export default  Post;