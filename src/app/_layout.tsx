import { Stack } from 'expo-router'
import { Text, View } from 'react-native'


const RootNavigation = () => {
    return (

        <Stack>
            <Stack.Screen name='index'/>
        </Stack>

    )
}

export default RootNavigation

