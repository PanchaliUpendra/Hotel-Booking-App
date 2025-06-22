import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import Home from './Components/Home/Home';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Onboarding1 from './Components/Onboarding/Onboarding1';
import Onboarding2 from './Components/Onboarding/Onboarding2';
import Onboarding3 from './Components/Onboarding/Onboarding3';
import Profile from './Components/Profile/Profile';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView edges={['top','bottom']} style={{ flex: 1}}>
          <StatusBar translucent={true} backgroundColor={'white'} barStyle='dark-content' />
          <Profile/>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
