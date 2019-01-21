import * as React from 'react'
import {
  createStackNavigator,
} from 'react-navigation'
import { createAppContainer } from 'react-navigation'
import LoadingScreen from '@/screens/Loading'

const Root = () => {
  const AppContainer = createAppContainer(createStackNavigator(
    {
      ['PRODUCT_SEARCH']: LoadingScreen,
    },
    {
      initialRouteName: 'PRODUCT_SEARCH'
    }
  )
)
  return <AppContainer uriPrefix="numi://numi/" />
}

export default {
  Root,
}
