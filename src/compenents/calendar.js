import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { TextInput } from 'react-native-gesture-handler';
import Data from "../json/recorderdata.json";
const title = "紀錄";
const blood = '血糖';
const pressure = '血糖';
function Input(){
  Alert.prompt(
    title,
    blood,
    
    [
       {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {
      text: 'OK',
      onPress: (password) => console.log('OK Pressed, password: ' + password),
    },
    ],

  
    
      
  
    
      
    
  )
 
}
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
     
    };
    this.onDateChange = this.onDateChange.bind(this);
    
  }
  
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
 
  render(navigation) {
   function onChangeNum(num,set){
      set=num;
    }
  
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    let sugarnum07
    let pressnum107
    let pressnum207
    let sugarnum08
    let pressnum108
    let pressnum208
    let sugarnum09
    let pressnum109
    let pressnum209
    let sugarnum10
    let pressnum110
    let pressnum210
    let sugarnum11
    let pressnum111
    let pressnum211
    let sugarnum12
    let pressnum112
    let pressnum212
    let sugarnum13
    let pressnum113
    let pressnum213
    let sugarnum14
    let pressnum114
    let pressnum214
    let sugarnum15
    let pressnum115
    let pressnum215
    let sugarnum16
    let pressnum116
    let pressnum216
    let sugarnum17
    let pressnum117
    let pressnum217
    let sugarnum18
    let pressnum118
    let pressnum218
    let sugarnum19
    let pressnum119
    let pressnum219
    let sugarnum20
    let pressnum120
    let pressnum220
    let sugarnum21
    let pressnum121
    let pressnum221
    let sugarnum22
    let pressnum122
    let pressnum222
    let sugarnum23
    let pressnum123
    let pressnum223
    
    return (
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
      <View style={styles.container}>
      <Agenda
  // the list of items that have to be displayed in agenda
  items={
    {
      '2020-08-22': [{text: 'item 1 - any js object'}],
     '2020-07-23': [{text: 'item 2 - any js object'}],
     '2020-06-04': [{text: 'item 3 - any js object'}],
    }}
  // callback that gets called when items for a certain month should be loaded (month became visible)
  loadItemsForMonth={(mongh) => {console.log('trigger items loading')}}
  // callback that gets called on day press
  onDayPress={(day)=>{}}
  // initially selected day
  selected={'2020-06-04'}
  // specify how each item should be rendered in agenda
  renderItem={(items) => {
    return (<View style={{flex:1,height:1060}}>
              <View style={styles.bar}>
                <Text style={styles.sugar}>血糖</Text>
                <Text style={styles.press}>血壓</Text>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[0].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[0].sugarnum)}
                  value={Data[0].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[0].pressurenum1)}
                  value={Data[0].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[0].pressurenum2)}
                  value={Data[0].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[1].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[1].sugarnum)}
                  value={Data[1].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[1].pressurenum1)}
                  value={Data[1].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[1].pressurenum2)}
                  value={Data[1].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[2].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[2].sugarnum)}
                  value={Data[2].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[2].pressurenum1)}
                  value={Data[2].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[2].pressurenum2)}
                  value={Data[2].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[3].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[3].sugarnum)}
                  value={Data[3].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[3].pressurenum1)}
                  value={Data[3].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[3].pressurenum2)}
                  value={Data[3].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[4].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[4].sugarnum)}
                  value={Data[4].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[4].pressurenum1)}
                  value={Data[4].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[4].pressurenum2)}
                  value={Data[4].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[5].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[5].sugarnum)}
                  value={Data[5].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[5].pressurenum1)}
                  value={Data[5].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[5].pressurenum2)}
                  value={Data[5].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[6].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,Data[6].sugarnum)}
                  value={Data[6].sugarnum}
                  
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,Data[6].pressurenum1)}
                  value={Data[6].pressurenum1}
                 
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,Data[6].pressurenum2)}
                  value={Data[6].pressurenum2}
                
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[7].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum07)}
                  value={sugarnum07}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum107)}
                  value={pressnum107}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum207)}
                  value={pressnum207}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[8].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum08)}
                  value={sugarnum08}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum108)}
                  value={pressnum108}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum208)}
                  value={pressnum208}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[9].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum09)}
                  value={sugarnum09}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum109)}
                  value={pressnum109}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum209)}
                  value={pressnum209}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[10].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum10)}
                  value={sugarnum10}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum110)}
                  value={pressnum110}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum210)}
                  value={pressnum210}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[11].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum11)}
                  value={sugarnum11}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum111)}
                  value={pressnum111}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum211)}
                  value={pressnum211}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[12].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum12)}
                  value={sugarnum12}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum112)}
                  value={pressnum112}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum212)}
                  value={pressnum212}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[13].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum13)}
                  value={sugarnum13}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum113)}
                  value={pressnum113}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum213)}
                  value={pressnum213}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[14].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum14)}
                  value={sugarnum14}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum114)}
                  value={pressnum114}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum214)}
                  value={pressnum214}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[15].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum15)}
                  value={sugarnum15}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum115)}
                  value={pressnum115}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum215)}
                  value={pressnum215}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[16].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum16)}
                  value={sugarnum16}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum116)}
                  value={pressnum116}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum216)}
                  value={pressnum216}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[17].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum17)}
                  value={sugarnum17}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum117)}
                  value={pressnum117}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum217)}
                  value={pressnum217}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[18].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum18)}
                  value={sugarnum18}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum118)}
                  value={pressnum118}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum218)}
                  value={pressnum218}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[19].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum19)}
                  value={sugarnum19}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum119)}
                  value={pressnum119}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum219)}
                  value={pressnum219}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[20].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum20)}
                  value={sugarnum20}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum120)}
                  value={pressnum120}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum220)}
                  value={pressnum220}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[21].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum21)}
                  value={sugarnum21}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum121)}
                  value={pressnum121}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum221)}
                  value={pressnum221}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[22].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum22)}
                  value={sugarnum22}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum122)}
                  value={pressnum122}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum222)}
                  value={pressnum222}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
              <View style={styles.record}>
                <Text style={styles.time}>{Data[23].time}</Text>
                <TextInput 
                  style={styles.sugarnumsty}
                  onChangeText={text => onChangeNum(text,sugarnum23)}
                  value={sugarnum23}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.mg}>mg</Text>
                <TextInput 
                  style={styles.pressnumsty1}
                  onChangeText={text => onChangeNum(text,pressnum123)}
                  value={pressnum123}
                  placeholder='0'
                  keyboardType="numeric"/>
                <Text style={styles.sep}>/</Text>
                <TextInput 
                  style={styles.pressnumsty2}
                  onChangeText={text => onChangeNum(text,pressnum223)}
                  value={pressnum223}
                  placeholder='0'
                  keyboardType="numeric"/>
              </View>
            </View>);}}
  // specify how each date should be rendered. day can be undefined if the item is not first in that day.
  renderDay={() => {return (<View></View>);}}
  // specify how empty date content with no items should be rendered
  renderEmptyDate={() => {return (<View>
   

  </View>);}}
  
 
  // specify your item comparison function for increased performance
  rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
  // agenda theme
  theme = {{}}
  // agenda container style
  style = {{}} />

        

        <View>
         
        </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 0,
  },
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
},
bar:{
  flexDirection:"row"
},
sugar:{
  width:72,
  height:26,
  backgroundColor:"white",
  marginTop:13.5,
  marginLeft:110,
  paddingTop:5,
  paddingLeft:21,
  fontSize:15,
  borderRadius:8
},
press:{
  width:72,
  height:26,
  backgroundColor:"white",
  marginTop:13.5,
  marginLeft:54,
  paddingTop:5,
  paddingLeft:21,
  fontSize:15,
  borderRadius:8
},
record:{
  flexDirection:"row"
},
time:{
  width:35,
  height:16,
  marginTop:21,
  marginLeft:17,
  fontSize:12
},
sugarnumsty:{
  width:46,
  height:20,
  marginLeft:85,
  marginTop:18
},
mg:{
  width:46,
  height:20,
  marginLeft:10,
  marginTop:18
},
pressnumsty1:{
  marginLeft:12,
  marginTop:18,
  width:25
},
sep:{
  width:8,
  marginTop:18
},
pressnumsty2:{
  width:25,
  marginTop:18,
  
}
});