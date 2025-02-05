import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

//auto hiding of the splash screen
SplashScreen.preventAutoHideAsync();


  const RootLayout: React.FC = () => {
    useEffect(() => {
      SplashScreen.hideAsync();
    },[]);

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
