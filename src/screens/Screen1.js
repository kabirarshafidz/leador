import React from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import ScreenPoint from '../components/ScreenPoint';
import {RightNextButton, LeftNextButton} from '../../assets/SvgComponent';
import tw from 'twrnc';

export default function Screen1({
  title,
  color,
  height,
  weight,
  content,
  navigation,
}) {
  return (
    <ScreenPoint
      title="Problem Identification"
      content={content}
      nextPage="Screen2"
      prevPage="MainScreen"
      navigation={navigation}
    />
  );
}
