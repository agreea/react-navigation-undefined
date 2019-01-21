import React from 'react'
import { View, ActivityIndicator } from 'react-native'

class LoadingScreen extends React.Component<{ message?: string }, any> {
  render() {
    return (
      <View style={{ flex: 1, alignContent: 'stretch' }}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <ActivityIndicator size="large" color="#000000" />
        </View>
      </View>
    )
  }
}

export default LoadingScreen
