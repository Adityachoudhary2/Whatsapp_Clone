import imagePath from "@/src/constants/imagePath";
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { moderateScale, verticalScale } from "react-native-size-matters";

const TermsAgree: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.Welcome_heading}>Welcome to WhatsApp</Text>
      <Image source={imagePath.welcome} style={styles.img} />
      <Text style={styles.text}>Lorem ipsum, dolor sit amet magnam!</Text>
    </View>
    <View style={styles.footer}>
      <Text style={styles.from_text}>From</Text>
      <Text style={styles.facebook_text}>Facebook</Text>
    </View>
  </SafeAreaView>
  );
};

export default TermsAgree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84),
  },
  header: {
    alignItems: "center",
    gap: moderateScale(20),
  },
  Welcome_heading: {
    fontSize: moderateScale(30),
    color: "#000000",
    fontWeight: "bold",
  },
  img: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(153),
  },
  text: {
    fontSize: moderateScale(13)
  },
  footer: {
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#000000",
    textTransform: "uppercase",
    fontWeight: "600"
  },
});


