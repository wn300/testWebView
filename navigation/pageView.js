import React, { Component } from 'react'
import { StyleSheet, View, Text, Alert } from 'react-native'
import { WebView } from 'react-native-webview';

class PageView extends Component {
  state = {
    title: 'Carcasa'
  }
  constructor(props) {
    super(props)
   
  }

  action(event){
    this.setState({ title: event.nativeEvent.data });
  }

  render() {
    const runFirst = `
      localStorage.setItem('token', 'Esto es desde la ReactNative')
    `;
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 1 }}>
          <WebView
            source={{ uri: 'https://wn300.github.io/test-webvview/' }}
            injectedJavaScriptBeforeContentLoaded={runFirst}
            onMessage={event => {
              this.action(event);
            }}

          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{this.state.title}</Text>
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#003c8f',
    marginTop: 20,
    marginBottom: 20
  },
})

export default PageView;