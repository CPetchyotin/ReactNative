import { View, Text}  from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const ThirdPage = () => {
  return (
    <View>
      <Text>This is Third Page of the App{'\n\n'}</Text>
      <Button
        titleitle='GO BACK'
        onPress={()=>navigation.goBack()}
        /> 
        <Button
        titleitle='GO TO SECOND PAGE'
        onPress={()=>navigation.navigate('SecondPage')}
        /> 
        <Button
        titleitle='RESET NAVIGATOR TO FIRST PAGE'
        onPress={()=>navigation.navigate('FirstPage')}
        />
    </View>
  )
}

export default ThirdPage