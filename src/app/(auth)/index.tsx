import imagePath from '@/src/constants/imagePath';
import {Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';

const Auth: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}></View>
    <View style={styles.body}>
      <Image source={imagePath.logo} style={styles.logo_style} resizeMode='contain' />
      <Text style={styles.whatsapp_text}>WhatsApp</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.from_text}>From</Text>
      <Text style={styles.facebook_text}>Facebook</Text>
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
});
