import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

const AuthStack: React.FC = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="terms_agree" />
      <Stack.Screen name="login" />
      <Stack.Screen name="verify_otp" />
    </Stack>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
