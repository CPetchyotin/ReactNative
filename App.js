import { View, Text}  from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import HomeScreen from './Screens/HomeScreen'
// import DetailsScreen from './Screens/DetailsScreen'
import FirstPage from './Pages/FirstPage'
import SecondPage from './Pages/SecondPage'
import ThirdPage from './Pages/ThirdPage'
import CreatePostScreen from './Screens/CreatePostScreen'
import IndexScreen from './Screens/IndexScreen'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator mode = 'model'
         ScreenOptions ={{
            headerStyle:{
                backgroundColor :'gold'
            },
            headerTintColor:'#ffff',
            headerTitleStyle:{
                fontWeight:'bold',
            }
        }}>
           
            <Stack.Screen
            name = 'Index'
            component = {IndexScreen}
            options = {{title: 'MainPage'}}
            
            />
            <Stack.Screen
            name = 'CreatePost'
            component = {CreatePostScreen}
            />     
            </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})