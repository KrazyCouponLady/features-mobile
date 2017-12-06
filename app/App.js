import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from "react-native"

import PreferenceInput from "./actions/PrefenceInput"

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Features Mobile</Text>
        <PreferenceInput/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    margin: 10
  }
})
