import imagePath from '@/src/constants/imagePath';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';

const Auth: React.FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false)


  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(true)
    }, 2000);

    const navigationTimeout = setTimeout(() => {
      router.push('/(auth)/terms_agree')
    }, 3000);

   return()=>{
    clearTimeout(loadingTimeout);
    clearTimeout(navigationTimeout);

   }

  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logo_style} resizeMode='contain' />
        <Text style={styles.whatsapp_text}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>

        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(40)} color={"#0CCC83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: verticalScale(70),
  },
  header: {},
  body: {
    alignItems: 'center',
    gap: verticalScale(7),
  },
  footer: {
    alignItems: 'center',
     height: verticalScale(80),
    justifyContent: "flex-end"
  },
  from_text: {
    fontSize: moderateScale(12),
    color: '#867373',
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: '#000000',
  },
  logo_style: {
    width: moderateScale(70),
    height: moderateScale(70),
    borderRadius: moderateScale(10),
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    color: '#000000',
  },
  loading_text: {
    fontSize: moderateScale(20),
    color: "#00A884",
    fontWeight: "bold",
    marginTop: verticalScale(10),
  }
});
