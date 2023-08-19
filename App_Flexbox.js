import { View, Text, StyleSheet } from "react-native";
import React from "react";

const App = () => {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      {/* <View style={{ flex: 1, backgroundColor: "black" }} />
      <View style={{ flex: 2, backgroundColor: "gold" }} />
      <View style={{ flex: 3, backgroundColor: "white" }} /> */}
        <View style={{ flex: 1, backgroundColor: "black" }} />
        <View style={{ flex: 1, backgroundColor: "whire" }} />
        <View style={{ flex: 1, backgroundColor: "gold" }} />
    </View>
  );
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

  },
});

