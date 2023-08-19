import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import TouchableExample from './Components/TouchableExample'
import RandomUsersScreen from './Components/RandomUsersScreen'
const App = () => {
  return (
    <View >
      <RandomUsersScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
});