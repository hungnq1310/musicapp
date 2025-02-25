import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/layout'

const SongsScreenLayout = () => {
	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen name="index" options={{ 
					headerTitle: 'Songs',
					...StackScreenWithSearchBar,	

				}} />
			</Stack>
		</View>
	)
}

export default SongsScreenLayout;
