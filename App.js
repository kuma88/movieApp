import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Hello from "./components/hello";


export default function App() {
  return (
    <View style={styles.container}>

      <Hello name="Kuma"></Hello>

      <Image source={ require("./assets/6320628_150.jpg")} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

});
