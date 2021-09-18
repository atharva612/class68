import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements';



export default class App extends React.Component() {


render(){

  return(
<View  style={styles.container}>
<Header  
backgroundColor={lightblue}
//
centerComponent={{text:"MonkeyChunkyApp",style:{color:"orange",fontSize:30}}}


/>


</View>


  )
}

}


const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:"lightgreen",



}

});




