import React from "react";
import { StyleSheet, View } from "react-native";
import Form from "../Form";

export default function Main() {
  return (
    <View style={StyleSheet.container}>
      <Form />
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
