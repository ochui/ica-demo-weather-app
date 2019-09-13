import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Weather from './components/Weather'
import Loading from './components/Loading'

export class App extends Component {
  render() {
    return (
      <Loading />
    )
  }
}

export default App
