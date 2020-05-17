import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
import ChooseScreen from "../screens/ChooseScreen";
import SignupScreen from "../screens/SingupScreen";
import BellScreen from "../screens/BellScreen";
import PostScreen from "../screens/PostScreen";
import RecordScreen from "../screens/RecordScreen";
const Stack = createStackNavigator();
function Navigation() {
  return (
   
     
    
    <NavigationContainer>
       <Image source={require("../../img/img_backimg.png")}
                  style={styles.backimg}/>
        <Stack.Navigator>
          
            <Stack.Screen name="Login" 
                          component={LoginScreen}
                          options={{
                            title:null
                          }}
                         
                          />
            <Stack.Screen name="Choose"
                          component={ChooseScreen}
                          options={{
                            title:null
                          }}
                          />
              <Stack.Screen name="Singup"
                          component={SignupScreen}
                          options={{
                            title:null
                          }}
                          />
              <Stack.Screen name="Bell"
                          component={BellScreen}
                          options={{
                            title:null
                          }}
                          />
              <Stack.Screen name="Post"
                          component={PostScreen}
                          options={{
                            title:null
                          }}
                          />
              <Stack.Screen name="Record"
                          component={RecordScreen}
                          options={{
                            title:"紀錄表"
                          }}
                          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backimg:{
    marginTop:-421,
   
  }
});

export default Navigation;