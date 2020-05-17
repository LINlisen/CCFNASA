import React from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity} from "react-native";
import { TextInput } from "react-native";




const Singup =({navigation})=>{
    const [value,onChangeText] =React.useState(' ');
    const [password,ChangeText] =React.useState(' ');
    return(
        <View style={styles.all}>
            <Image source={require("../../img/img_backimg.png")}
                    style={styles.backimg}/>
            <View>
            <Text style={styles.logintxt}>註冊</Text>
            <Text style={styles.loginlabel}>名稱</Text>
            <TextInput 
                style={styles.logininput}
                onChange={text =>onChangeText(text)}
                value={value}
                returnKeyLabel="done"
                />
            <Text style={styles.passwordlabel}>密碼</Text>
            <TextInput 
                style={styles.logininput}
                onChange={text =>ChangeText(text)}
                value={password}
                returnKeyLabel="done"
                />
            <TouchableOpacity
                onPress={()=>navigation.navigate('Choose')}>
                <Image source={require("../../img/btn_login.png")}
                        style={styles.loginbt}/>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Singup')}>
                    <Text style={styles.singuplabel}>登入</Text>
                </TouchableOpacity>
            <TouchableOpacity
                >
                    <Text style={styles.forgotlabel}>忘記密碼?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"white",
        height:900,
        
    },
    backimg:{
        width:688.67,
        height:499.17,
        marginTop:0,
        marginLeft:-100
    },
    logintxt:{
        fontSize:40,
        marginLeft:45,
        marginTop:-396.2,
        color:"white"
    },
    loginlabel:{
        fontSize:20,
        color:"#FFF4F4",
        width:40,
        height:27,
        marginTop:103,
        marginLeft:45
    },
    logininput:{
        borderColor:"#707070",
        width:281.5,
        height:35.5,
        borderBottomWidth:1,
        marginTop:0,
        marginLeft:45
    },
    passwordlabel:{
        fontSize:20,
        color:"#FFF4F4",
        width:40,
        height:27,
        marginTop:27.5,
        marginLeft:45
    },
    loginbt:{
        width:85,
        height:85,
        marginTop:82.5,
        marginLeft:290
    },
    singuplabel:{
        width:40,
        height:27,
        fontSize:20,
        color:"#4D5460",
        marginTop:17,
        marginLeft:45
    },
    forgotlabel:{
        width:100,
        height:27,
        fontSize:20,
        color:"#959595",
        marginTop:31,
        marginLeft:45
    },
  });
  
  export default  Singup;