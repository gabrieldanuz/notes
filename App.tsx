import 'react-native-gesture-handler'
import { StatusBar } from 'react-native'
import { HoldMenuProvider } from 'react-native-hold-menu'

import { Home } from './src/screens/Home'

export default function App() {
  return (
    <HoldMenuProvider theme="dark">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </HoldMenuProvider>
  )
}
