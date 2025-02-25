import { View } from 'react-native'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/layout'

const PlaylistsScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{ 
                    headerTitle: 'Playlists', 
                    ...StackScreenWithSearchBar,
                }} />
            </Stack>
        </View>
    )
}

export default PlaylistsScreenLayout;
