import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ViewBoxesWithColorAndText from "./Components/ViewBoxesWithColorAndText";
import DisplayandImage from "./Components/DisplayandImage";
import LotsOfGreeting from "./Components/LotsOfGreeting";
import MyCustomText from "./Components/MyCustomText";
import Counter from "./Components/Counter";
import MyInput from "./Components/MyInput";
import Form from "./Components/Form.Js";
import IncrementCounter from "./Components/IncrementCounter";
import Login from "./Components/Login";
// import Recap from './Components/Recap'
import DefineStyle from "./Components/DefineStyle";
const App = () => {
  return (
    <DefineStyle style={styles.container}>
      {/* <Counter/> */}
      {/* {<MyInput/>} */}
      {/* <IncrementCounter/> */}
      {/* <Form/> */}
      {/* <Login/> */}
      {/* <Recap/> */}
    </DefineStyle>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});