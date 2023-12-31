import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Screens/HomeScreen'
import DetailsScreen from './Screens/DetailsScreen'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = 'Home'
         ScreenOptions ={{
            headerStyle:{
                backgroundColor :'gold'
            },
            headerTintColor:'#ffff',
            headerTitleStyle:{
                fontWeight:'bold',
            }
        }}>
           
            <Stack.HomeScreen
            name = 'Home'
            component = {HomeScreen}
            options = {{title: 'Overview'}}
            />
            <Stack.Screen
            name = 'Details'
            component = {DetailsScreen}
            />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})