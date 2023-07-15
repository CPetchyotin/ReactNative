import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MyCustomTextWith = ({fname,lname})=>{
    return(
        <view>
            <text>Your First name is {fname}! and Last name is {lname}</text>
        </view>
    )
}
 
const MyCustomText = () => {
  return (
    <View style={{alignItems:'Center',top:25,flex:1,justifyContent:'center'} }>
      <MyCustomTextWith fname = 'Chonnanut' lname ='Petchyotin'/>
      <MyCustomTextWith fname = 'Chittaworn'lname ='Konghuayrob'/>
    </View>
  )
}

export default MyCustomText

const styles = StyleSheet.create({})

