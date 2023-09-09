import { View, Text,Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const FirstPage = () => {
  return (
    <View>
      <Text>This is the First Page of the App{'\n'}</Text>
        <Button
        titleitle='GO TO SECOND PAGE'
        onPress={()=>navigation.push('SecondPage')}
        />
    </View>
  )
}

export default FirstPage
