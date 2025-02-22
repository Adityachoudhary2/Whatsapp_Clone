import { Stack, Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect,useState } from "react";

//auto hiding of the splash screen
SplashScreen.preventAutoHideAsync();


  const RootLayout: React.FC = () => {
    const [isLogin, setLogin] = useState<boolean>(false);
    useEffect(() => {
      SplashScreen.hideAsync();
    },[]);

  return (
    <>
      <Stack  screenOptions={{headerShown:false}}  />
      {isLogin ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootLayout;
