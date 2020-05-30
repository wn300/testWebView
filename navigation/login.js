import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'


class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('PageView')}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Ingresar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    top: 300
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#003c8f',
    marginBottom: 40,
  },
  loginText: {
    color: 'white',
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#003c8f',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1
    }
  },
})

export default Login;
