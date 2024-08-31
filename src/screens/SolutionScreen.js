import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import tw from 'twrnc';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenPoint from '../components/ScreenPoint';

import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';
import Screen3 from '../screens/Screen3';
import Screen4 from '../screens/Screen4';
import Screen5 from '../screens/Screen5';
import Screen6 from '../screens/Screen6';

const Stack = createNativeStackNavigator();

export default function SolutionScreen({route, navigation}) {
  const {completion} = route.params;

  // Split the response into sections based on the prompts
  // const sections = completion.split(
  //   /(?=(Problem Identification:|Members' motivation assessment:|Members' competence assessment:|Leadership style recommendation:|Problem-solving recommendations:|Further action for different expected responses:))/,
  // );

  // const processData = completion => {
  //   const screensData = completion
  //     .split(/\d+\./)
  //     .filter(Boolean)
  //     .map(item => item.trim());
  //   return screensData;
  // };

  // const sections = [];

  return (
    <SafeAreaView style={tw`flex-1 bg-[#FFD400]`}>
      <View style={tw`items-center mt-6`}>
        <Text style={tw`text-[#01296B] text-4xl font-bold mt-4 mb-2`}>
          My Solutions!
        </Text>
        <View style={tw`w-full h-75% flex`}>
          <ScreenPoint
            content={completion}
            nextPage="MainScreen"
            prevPage="MainScreen"
            navigation={navigation}
          />
          {/* <Stack.Navigator initialRouteName="Screen1">
            <Stack.Screen
              name="Screen1"
              component={() => (
                <Screen1 content={completion} navigation={navigation} />
              )}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Screen2"
              component={() => (
                <Screen2 content={completion} navigation={navigation} />
              )}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Screen3"
              component={() => (
                <Screen3 content={completion} navigation={navigation} />
              )}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Screen4"
              component={() => (
                <Screen4 content={completion} navigation={navigation} />
              )}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Screen5"
              component={() => (
                <Screen5 content={completion} navigation={navigation} />
              )}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Screen6"
              component={() => (
                <Screen6 content={completion} navigation={navigation} />
              )}
              options={{headerShown: false}}
            />
          </Stack.Navigator> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
