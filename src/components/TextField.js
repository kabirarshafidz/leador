import React from 'react';
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

export default function TextField({
  children,
  title,
  color,
  height,
  width,
  placeholder,
  value,
}) {
  return (
    <View style={tw`p-4`}>
      <Text style={tw` font-bold pb-2 text-[${color}]`}>{title}</Text>
      <View
        style={tw` bg-gray-50 border-[${color}] border-4 rounded-xl h-[${height}] w-[${width}]`}>
        <TextInput
          multiline={true}
          placeholder={placeholder}
          style={tw`p-2`}
          value={value}
        />
      </View>
    </View>
  );
}
