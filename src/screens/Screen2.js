import React from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import ScreenPoint from '../components/ScreenPoint';
import {RightNextButton, LeftNextButton} from '../../assets/SvgComponent';
import tw from 'twrnc';

export default function Screen2({
  title,
  color,
  height,
  weight,
  content,
  navigation,
}) {
  return (
    <ScreenPoint
      title="Members' Motivation Assessment"
      content={content}
      nextPage="Screen3"
      prevPage="Screen1"
      navigation={navigation}
    />
  );
}
