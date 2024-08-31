import React from 'react';
import {View, Text, Button, TouchableWithoutFeedback} from 'react-native';
import ScreenPoint from '../components/ScreenPoint';
import {RightNextButton, LeftNextButton} from '../../assets/SvgComponent';
import tw from 'twrnc';

export default function Screen3({
  title,
  color,
  height,
  weight,
  content,
  navigation,
}) {
  return (
    <ScreenPoint
      title="Members' Competence Assessment"
      content={content}
      nextPage="Screen4"
      prevPage="Screen2"
      navigation={navigation}
    />
  );
}
