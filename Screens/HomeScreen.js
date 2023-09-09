import { View, Text,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const HomeScreen = ({navigation}) => {

  return (
    <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text> Home Screen</Text>
    {/* <Text>initial Param : itemId - {itemId}{'\n'}</Text>
    <Button
    title= 'Update param'
    onPress={()=>navigation.setParam({
        itemId: Math.floor(Math.random()*100)
    })}/> */}
    <Button
    title = 'Go to Details'
    // 1.Navigate to the Details route with params  
    onPress={()=>{navigation.navigate('Details',{
      itemId : 1088,
      otherParam: 'React Native App'
    })
  }}
    />
    </View>
  )
}


export default HomeScreen

