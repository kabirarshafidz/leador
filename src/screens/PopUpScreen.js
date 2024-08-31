import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import tw from 'twrnc';

export default function PopUpScreen({navigation}) {
  useEffect(() => {
    // Set a timeout to navigate to "Screen2" after 3 seconds (3000 milliseconds)
    const timeout = setTimeout(() => {
      navigation.navigate('MainScreen');
    }, 1000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View
      style={tw` flex-1 bg-[#01296B] justify-center items-center flex flex-col`}>
      <Text style={tw` font-bold text-6xl text-[#FFD400]`}>Lead'Or</Text>
      <Text style={tw` font-bold text-xl text-[#FFD400]`}>
        Leaders' Counselor
      </Text>
    </View>
  );
}
