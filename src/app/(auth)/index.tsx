import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const Auth: React.FC = () => {
  return (
    <View style={{ marginTop: 20 }}>
      <Text>Auth</Text>
      <Link href="/login">Login</Link>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({});
