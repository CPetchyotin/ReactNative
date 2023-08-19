import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './Components/styles'

const App = () => {
  return (
    <View style = {styles.comtainer}>
      <Text style={styles.row}>React</Text>
      <Text style={styles.row}>Native</Text>
    </View>
  )
}

export default App

// const styles = StyleSheet.create({})