import React from 'react'
import Navigators from '@/navigators'

console.disableYellowBox = true

class App extends React.PureComponent<any, any> {
  render() {
    return <Navigators.Root />
  }
}

export default App
