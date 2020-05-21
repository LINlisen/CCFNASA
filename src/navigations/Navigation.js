import React from 'react';
import { StyleSheet, Text, View,Image,AsyncStorage  } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import LoginScreen from "../screens/LoginScreen";
import ChooseScreen from "../screens/ChooseScreen";
import SignupScreen from "../screens/SingupScreen";
import BellScreen from "../screens/BellScreen";
import PostScreen from "../screens/PostScreen";
import RecordScreen from "../screens/RecordScreen";
const Stack = createStackNavigator();
const PERSISTENCE_KEY = "NAVIGATION_STATE";
function Navigation() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
  return (
   
     
    
    <NavigationContainer 
    initialState={initialNavigationState}
    onStateChange={(state) =>
      AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
    }
      >
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