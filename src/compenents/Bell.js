import React, { useRef,useEffect,useContext,useState } from "react";
import { StyleSheet, Text, View, Animated, Image, ScrollView, TouchableOpacity,Alert,Vibration ,Button,AsyncStorage} from "react-native";
import { TextInput } from "react-native";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import LottieView from "lottie-react-native";
import { Path } from "react-native-svg";
import * as firebase from "firebase";
import Constants from "expo-constants";
import axios from 'axios';
import { Audio } from 'expo-av';
function Presskey(){
    Alert.alert(
        '群組金鑰',
        'jdskfjiew',
    )
}
const NTUE_PUSH_ENDPOINT = "https://ntuepushserver.herokuapp.com/tokens";
const EXPO_PUSH_ENDPOINT = "https://exp.host/--/api/v2/push/send";

const Bell = ({ navigation }) => {

    playSound = async () => {
        const soundObject = new Audio.Sound();
        try {
          await soundObject.loadAsync(require('../../radio/alert.mp3'));
          await soundObject.playAsync();
          // Your sound is playing!
        } catch (error) {
          // An error occurred!
        }
    }

    const animation = useRef(null);
    const onPress = () => {
        animation.current.play();
    };

    const [expoPushToken, setExpoPushToken] = useState("");
    const [sendMsg, setSendMsg] = useState("");
    const [receivedMsg, setReceivedMsg] = useState("");

    // const { isLoginState } = useContext(StoreContext);
    // const [isLogin, setIsLogin] = isLoginState;

    //notification code below
    const registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
          );
          let finalStatus = existingStatus;
          if (existingStatus !== "granted") {
            const { status } = await Permissions.askAsync(
              Permissions.NOTIFICATIONS
            );
            finalStatus = status;
          }
          if (finalStatus !== "granted") {
            // alert('Failed to get push token for push notification!');
            return;
          }
          const token = await Notifications.getExpoPushTokenAsync();
          setExpoPushToken(token);
        } else {
          // alert('Must use physical device for Push Notifications');
        }
    
        if (Platform.OS === "android") {
          Notifications.createChannelAndroidAsync("default", {
            name: "default",
            sound: true,
            priority: "max",
            vibrate: [0, 250, 250, 250],
          });
        }
      };
      const _handleNotification = (_notification) => {
        const {
          data: { text },
          orign,
        } = _notification;
        Vibration.vibrate();
        console.log(_notification);
        setReceivedMsg(text);
      };
    
      const sendPushNotification = async () => {
        let message = {  //for EXPO PUSH SERVER
          to: expoPushToken,
          sound: "default",
          title: "Original Title",
          body: "And here is the body!",
          data: { text: sendMsg },
          _displayInForeground: true,
        };
       
        // let message = {
        //   //for NTUE PUSH SERVER
        //   token: expoPushToken,
        //   message: sendMsg,
        // };
    
        try {
          await axios.post(EXPO_PUSH_ENDPOINT, message);
          // await axios.post(NTUE_PUSH_ENDPOINT, message);
        } catch (e) {
          console.log(e);
        }
      };
    
      const onHandlePushNotification = () => {
        registerForPushNotificationsAsync();
        Notifications.addListener(_handleNotification);  
      };
      const onSignOut = () => {
        firebase.auth().signOut();
        // setIsLogin(false);
      };
    
      useEffect(() => onHandlePushNotification(), []);    

console.log(expoPushToken);

    return (
        <View style={styles.all}>
            <Image source={require('../../img/img_bellheader.png')}
                style={styles.header}
            />
            {/* <TouchableOpacity>
                <Image source={require('../../img/btn_headerleft.png')}
                    style={styles.headerleft}
                />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={Presskey}>

                <Image source={require('../../img/btn_headerleft.png')}
                    style={styles.headerright}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                onPress(),
                sendPushNotification(),
                playSound()}
            } style={styles.bell}>
                <Image source={require('../../img/0012.png')}
                />
                <LottieView
                    ref={animation}
                    style={styles.bellanimate}
                    source={require("../json/lf30_editor_ejlLgA.json")}
                    loop={false} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Post')}>
                <Image source={require('../../img/000.png')}
                    style={styles.btntalk}
                />
            </TouchableOpacity>

        {/* <TextInput
        labelStyle={{ marginTop: 20 }}
        label="Notification Message"
        placeholder="Enter your push message here ..."
        autoCorrect={false}
        autoCapitalize="none"
        value={sendMsg}
        onChangeText={(sendMsg) => setSendMsg(sendMsg)}
      /> */}
      {/* <View style={styles.msgStyle}>
        <Text style={styles.msgTitleStyle}>The received message: </Text>
        <Text style={styles.msgContentStyle}>{receivedMsg}</Text>
      </View> */}
      {/* <Button
        title="Send Notification"
        buttonStyle={{ backgroundColor: "black" }}
        containerStyle={{ marginTop: 50, padding: 5 }}
        onPress={sendPushNotification}
      /> */}
      {/* <Button
        style={{ marginTop: 100 }}
        title="Sign out"
        buttonStyle={{ backgroundColor: "#F8671D" }}
        containerStyle={{ padding: 5 }}
        onPress={onSignOut}
      /> */}

            {/* <BellIcon width='40' active={true} /> */}
        </View>
    )
};
const styles = StyleSheet.create({
    all: {

        position: 'absolute',
        backgroundColor: "#EAF6FF",
        height: 900,

    },
    header: {
        width: 414,
        height: 88
    },
    headerright: {
        width: 20.91,
        height: 19.13,
        marginTop: -37.03,
        marginLeft: 363.8
    },
    headerleft: {
        width: 20.83,
        height: 19.79,
        marginTop: -37.03,
        marginLeft: 32
    },
    btntalk: {

        marginTop: -40,
        marginLeft: 280
    },
    bellanimate: {
        marginLeft: 27,
        marginTop: -81,
        width: 140

    },
    bell: {
        width: 500,
        height: 500,
        marginLeft: 57,
        marginTop: 152
    }
});

export default Bell;