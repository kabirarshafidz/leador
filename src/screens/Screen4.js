import React from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import ScreenPoint from '../components/ScreenPoint';
import {RightNextButton, LeftNextButton} from '../../assets/SvgComponent';
import tw from 'twrnc';

export default function Screen4({
  title,
  color,
  height,
  weight,
  content,
  navigation,
}) {
  return (
    <ScreenPoint
      title="Leadership Style Recommendation"
      content={content}
      nextPage="Screen5"
      prevPage="Screen3"
      navigation={navigation}
    />
  );
}
