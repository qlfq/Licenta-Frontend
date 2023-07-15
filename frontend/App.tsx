import React, { useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { Navigation } from './src/startup/navigation'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import { store } from './src/startup/store'
import axios from 'axios'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as PaperProvider } from 'react-native-paper'
import * as SplashScreen from 'expo-splash-screen'

// Configure axios
axios.defaults.baseURL = 'http://localhost:8080'

const ThemeProvider: React.FC = ({children}) => (
  <>
    <PaperProvider>
      {children}
    </PaperProvider>
  </>
)

const App = () => {
  const [fontsLoaded] = useFonts({
    sonoBold: require('./src/assets/fonts/sono/Sono-Bold.ttf'),
    sonoExtraBold: require('./src/assets/fonts/sono/Sono-ExtraBold.ttf'),
    sonoExtraLight: require('./src/assets/fonts/sono/Sono-ExtraLight.ttf'),
    sonoLight: require('./src/assets/fonts/sono/Sono-Light.ttf'),
    sonoSemiBold: require('./src/assets/fonts/sono/Sono-SemiBold.ttf'),
    sono: require('./src/assets/fonts/sono/Sono-Medium.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }


  return <View style={styles.container} onLayout={onLayoutRootView}>
      <ThemeProvider>
        <SafeAreaProvider>
          <Provider store={store}>
            <Navigation/>
          </Provider>
        </SafeAreaProvider>
      </ThemeProvider>
  </View>
}

export default App

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})
