import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

import SharedPreferences from 'react-native-shared-preferences'

export default class PreferenceInput extends Component {
  constructor (props) {
    super(props)
    this.state = { text: '' }
  }

  onSavePress = () => {
    SharedPreferences.setItem('testValue', this.state.text)
  }

  onShowPress = () => {
    SharedPreferences.getItem('testValue', (value) => {
      Alert.alert(
        'Value of sharedPref: testValue',
        value,
        [
          {text: 'OK', onPress: () => { console.log(value) }}
        ]
      )
    })
  }
 

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          underlineColorAndroid="white"
        />
        <Button
          onPress={this.onSavePress}
          title="Save to Shared Preferences"
          color="#ffce00"
        />
        <Button
          onPress={this.onShowPress}
          title="Get from Shared Preferences"
          color="#ffce00"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderColor: '#80c5de',
    borderWidth: 1.5,
    borderRadius: 1.0,
    marginBottom: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
