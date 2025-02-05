import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


//auto hiding of the splash screen
SplashScreen.preventAutoHideAsync();

const RootNavigation: React.FC = () => {
    const RootLayout: React.FC = () => {
        useEffect(() => {
            
            SplashScreen.hideAsync();
       
    })
    
        return null; // You might want to render something here.
      };
    
    return (

        <Stack>
            <Stack.Screen name='index'/>
        </Stack>

    )
}

export default RootNavigation

