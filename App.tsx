import { View } from 'react-native'
import React from 'react'
import Routes from './Src/navigation/Routes'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlashMessage position="top" />
      <Routes />
    </View>
  )
}

export default App

