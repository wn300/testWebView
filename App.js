import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

import AppNavigator from './navigation/navigation'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;
