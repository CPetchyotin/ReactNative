import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Greeting = (props )=>{
    return(
        <View>
            <text>Hello {props.name}</text>

        </View>
    )

}

const LotsOfGreeting = () => {
  return (
    <View style = {{alignItems:'center',top:50}}>
    <Greeting name = 'Merry Xmas'/>
    <Greeting name = 'Happy New Year'/>
    <Greeting name = 'Happy Chinese New Year'/>
    </View>
  )
}

export default LotsOfGreeting

const styles = StyleSheet.create({})