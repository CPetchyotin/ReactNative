import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ViewBoxesWithColorAndText from './Components/ViewBoxesWithColorAndText'
import DisplayandImage from './Components/DisplayandImage'
import LotsOfGreeting from './Components/LotsOfGreeting'
import MyCustomText from './Components/MyCustomText'
const App = () => {
  return( 
  <View style ={styles.container}>
    <MyCustomText/>
  </View>
  )
}


export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})