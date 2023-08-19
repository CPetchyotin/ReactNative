import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      padding:24
    },
    title: {
      fontsize: 60,
      fontWeight: "bold",
    },
    warning: {
      color: "black",
    },
    row:{
      padding:4,
      borderBottomColor:'red',
      borderBottomWidth:StyleSheet.hairlineWidth
    }
  });

  export default styles;