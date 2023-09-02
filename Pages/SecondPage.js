import { View, Text}  from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const SecondPage = () => {
  return (
    <View>
      <Text>This is Second Page of the App{'\n'}</Text>
      <Button
        title='GO BACK'
        onPress={()=>navigation.goBack()}
        />
         <Button
        title='GO TO SECOND PAGE..AGAIN'
        onPress={()=>navigation.navigate('SecondPage')}
        />
         <Button
        title='GO TO SECOND PAGE'
        onPress={()=>navigation.navigate('FirstPage')}
        />
         <Button
        title='GO TO THIRD PAGE'
        onPress={()=>navigation.navigate('ThirdPage')}
        />
    </View>
  )
}

export default SecondPage