import React from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import ScreenPoint from '../components/ScreenPoint';
import {RightNextButton, LeftNextButton} from '../../assets/SvgComponent';
import tw from 'twrnc';

export default function Screen6({
  title,
  color,
  height,
  weight,
  content,
  navigation,
}) {
  return (
    <ScreenPoint
      title="Further Action for Different Expected Responses"
      content={content}
      nextPage="MainScreen"
      prevPage="Screen5"
      navigation={navigation}
    />
  );
}
