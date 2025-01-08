import { StatusBar } from 'expo-status-bar'
import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// default initial component
const App = () => {
	return (
		// The area not overlapped by items such as navigation bar, notches.
		<SafeAreaProvider>
 			<RootNavigation />
			<StatusBar style="auto" />
		</SafeAreaProvider>
	)
  
}

// extract the navigation logic to a separate component
const RootNavigation = () => {
	<Stack>
		<Stack.Screen name='(tabs)' options={{headerShown: false}}/>
	</Stack>
}

export default App;