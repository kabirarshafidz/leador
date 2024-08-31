import React from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import TextField from './TextField';
import tw from 'twrnc';

export default function ScreenPoint({
  title,
  content,
  prevPage,
  nextPage,
  navigation,
}) {
  return (
    <View style={tw`bg-[#FFD400] flex-1 items-center`}>
      <TextField
        title={title}
        color="#01296B"
        height="575px"
        width="330px"
        value={content}
      />
      <View style={tw`flex-row w-[330px] justify-between`}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(prevPage)}>
          <View
            style={tw`bg-[#01296B] w-[90px] flex items-center justify-center h-[40px] rounded-lg`}>
            <Text style={tw`text-[#FFD400] text-base font-bold`}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
        {/* <TouchableWithoutFeedback onPress={() => navigation.navigate(nextPage)}>
          <View
            style={tw`bg-[#01296B] w-[90px] flex items-center justify-center h-[40px] rounded-lg`}>
            <Text style={tw`text-[#FFD400] text-base font-bold`}>Next</Text>
          </View>
        </TouchableWithoutFeedback> */}
      </View>
    </View>
  );
}
