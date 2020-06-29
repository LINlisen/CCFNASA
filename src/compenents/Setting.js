import React, { useState,useContext } from "react";
import { StyleSheet, Text, View, Image,ScrollView,TouchableOpacity, Alert, AsyncStorage} from "react-native";
import { TextInput } from "react-native";
import { Keyboard ,TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
import { Switch} from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native'
import { StoreContext, StoreProvider } from "../stores";
import * as firebase from "firebase";
const USERNAME_KEY="USERNAME_KEY";
const Setting =({navigation})=>{
   let value=false
   const title="使用者名稱"
   const message="目前名稱:"
   const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const { isLoginState } = useContext(StoreContext);
const [loggedin, setLoggedin] = useState(false);
     const [isLogin, setIsLogin] = isLoginState;
    const [username,setName] = useState('aaa');
    const [visible,setvisible]=useState(true)
    const saveFn=(username)=>{
        setName(username);
        try{
            AsyncStorage.setItem(USERNAME_KEY,JSON.stringify(username));
        }
        catch(error){
            console.log(error)
        }
    };
    React.useEffect(()=>{
        const storeState = async ()=>{
        try{
       
            const saveUserNameString = await AsyncStorage.getItem(USERNAME_KEY);
            const usernamestate = JSON.parse(saveUserNameString);
            setName(usernamestate);
        }
        catch(e){}
    }
    storeState();
},[]);
function Pressname(){
    Alert.prompt(
        title,
        message+username,
        
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: (text) => saveFn(text),
          },
        ],
        
      );
}
function Presskey(){
    Alert.alert(
        '群組金鑰',
        'jdskfjiew',
        
    )
}
const onSignOut = () => {
    firebase.auth().signOut();
    setIsLogin(true);
    setLoggedin(true);
};
    return(
        <TouchableWithoutFeedback
  onPress={Keyboard.dismiss}
>
        <View style={styles.all}>
        <KeyboardAvoidingView 
      behavior="position" 
      style={styles.container}
    >
           <Image source={require('../../img/img_bellheader.png')}
                    style={styles.header}
            />
           
           
            <Text style={styles.title}>設定</Text>
            <TouchableOpacity
                    onPress={Pressname}>
           <View style={styles.user}>
            <Image style={styles.iconuser}
                    source={require('../../img/icon_user.png')}/>
                   
            <Text style={styles.usertitle}>使用者名稱</Text>
            
           </View>
           </TouchableOpacity>
           <View style={styles.changepassword}>
            <Image style={styles.iconunlock}
                    source={require('../../img/icon_unlock.png')}/>
            <Text style={styles.unlocktitle}>更改密碼</Text>
           </View>
           <View style={styles.changepassword}>
            <Image style={styles.iconunlock}
                    source={require('../../img/icon_bell.png')}/>
            <Text style={styles.unlocktitle}>提醒</Text>
            <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{marginTop:28,marginLeft:211}}
      />
           </View>
           <TouchableOpacity 
           onPress={Presskey}>
           <View style={styles.changepassword}>
            <Image style={styles.iconkey}
                    source={require('../../img/icon_key.png')}/>
            <Text style={styles.keytitle}>群組金鑰</Text>
           </View>
           </TouchableOpacity>
           <View style={styles.changepassword}>
            <Image style={styles.iconvoice}
                    source={require('../../img/icon_voice.png')}/>
            <Text style={styles.voicetitle}>聲音偵測設定</Text>
           </View>
           <TouchableOpacity 
           onPress={onSignOut}>
           <Image style={styles.signout}
                source={require('../../img/bt_signout.png')}/>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
        </TouchableWithoutFeedback>
    )
};
const styles = StyleSheet.create({
    all:{
        
        position:'absolute',
        backgroundColor:"#EAF6FF",
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
       marginLeft:187,
       color:"white"
    },
   user:{
       flexDirection:"row",
       height:76,
       borderColor:"#707070",
       borderBottomWidth:1
   },
   iconuser:{
       width:20,
       height:20,
       marginLeft:24,
       marginTop:35
   },
   usertitle:{
       
       height:100,
       marginTop:34,
       marginLeft:36,
       fontSize:20,
       color:"#203D64",
       
   },
   changepassword:{
    flexDirection:"row",
    height:76,
    borderColor:"#707070",
    borderBottomWidth:1
},
unlocktitle:{
       
    height:100,
    marginTop:34,
    marginLeft:36,
    fontSize:20,
    color:"#203D64",
    
},
   iconunlock:{
    width:18.75,
    height:20.84,
    marginLeft:24,
    marginTop:32.5
   },
   iconkey:{
    width:20.83,
    height:19.79,
    marginLeft:24,
    marginTop:32.5
   },
   iconvoice:{
    width:21.83,
    height:15.44,
    marginLeft:24,
    marginTop:37.5
   },
   keytitle:{
    height:100,
    marginTop:34,
    marginLeft:33.2,
    fontSize:20,
    color:"#203D64",
   },
   voicetitle:{
    height:100,
    marginTop:34,
    marginLeft:32.2,
    fontSize:20,
    color:"#203D64",
   },
   signout:{
       width:331,
       height:68,
       marginTop:279,
       marginLeft:41.5
   }
  });
  
  export default  Setting;