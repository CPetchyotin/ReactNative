import { StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "../Components/styles";

const DefineStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.warning]}>Hello ngo</Text>
    </View>
  );
};

export default DefineStyle;


