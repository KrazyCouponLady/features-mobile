import React, { Component } from 'react'
import { Alert, AppRegistry, View } from 'react-native'

class Root extends Component {
    render () {
        const App = require('./App').default
        return (
          <View style={{ flex: 1 }}>
            <App/>
          </View>
        )
      }
}

function start () {
    let featuresmobile = () => <Root />
    AppRegistry.registerComponent('featuresmobile', () => featuresmobile)
}
  
export default {
    start
}
  