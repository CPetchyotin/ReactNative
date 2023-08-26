import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import TouchableExample from './Components/TouchableExample'
import RandomUsersScreen from './Components/RandomUsersScreen'
import FlatList_Example from './Components/FlatList_Example'
// import FlatList_HeaderFooter from './Components/FlatList_HeaderFooter'
// import FlastListAPI from './Components/FlastListAPI'
import News from './Components/News'
const App = () => {
  return (
    <View >
      <News/>
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

