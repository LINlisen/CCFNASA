import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen";
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