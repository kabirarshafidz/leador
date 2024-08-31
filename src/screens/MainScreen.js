import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import TextField from '../components/TextField';

export default function MainScreen({navigation}) {
  const [problem, setProblem] = useState('tes');
  const [motivation, setMotivation] = useState('tes');
  const [competence, setCompetence] = useState('tes');

  const handleGenerateSolution = async () => {
    try {
      // Assuming your backend is running on http://localhost:8081 (replace with your actual backend URL)
      const backendUrl = 'http://192.168.100.38:3000'; // Update with your backend URL

      // Make an HTTP POST request to the backend with user input
      const completion = await fetch(`${backendUrl}/ask-question`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          problem,
          motivation,
          competence,
        }),
      });

      if (!completion.ok) {
        throw new Error('Failed to generate solution');
      }

      // Handle the response from the backend (you might want to customize this based on your backend response)
      const result = await completion.json();
      console.log(result);

      // Navigate to the SolutionScreen and pass the response as a parameter
      navigation.navigate('SolutionScreen', {completion: result.reply});
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to generate solution');
    }
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-[#01296B]`}>
      <View style={tw` items-center`}>
        <Text style={tw`text-[#FFD400] text-3xl font-bold my-4`}>
          What is my problem?
        </Text>
        <View style={tw`p-4`}>
          <Text style={tw` font-bold pb-2 text-[#FFD400]`}>
            What problems are you facing?
          </Text>
          <View
            style={tw` bg-gray-50 border-[#FFD400] border-4 rounded-xl h-[200px] w-[370px]`}>
            <TextInput
              multiline={true}
              placeholder="Describe your problem..."
              style={tw`p-2`}
              onChangeText={text => setProblem(text)}
            />
          </View>
        </View>
        <View style={tw`p-4`}>
          <Text style={tw` font-bold pb-2 text-[#FFD400]`}>
            How is your members' motivation?
          </Text>
          <View
            style={tw` bg-gray-50 border-[#FFD400] border-4 rounded-xl h-[140px] w-[370px]`}>
            <TextInput
              multiline={true}
              placeholder="Describe your members' motivation level..."
              style={tw`p-2`}
              onChangeText={text => setMotivation(text)}
            />
          </View>
        </View>
        <View style={tw`p-4`}>
          <Text style={tw` font-bold pb-2 text-[#FFD400]`}>
            How is your members' competence?
          </Text>
          <View
            style={tw` bg-gray-50 border-[#FFD400] border-4 rounded-xl h-[140px] w-[370px]`}>
            <TextInput
              multiline={true}
              placeholder="Describe your members' competence level..."
              style={tw`p-2`}
              onChangeText={text => setCompetence(text)}
            />
          </View>
        </View>
        <View
          style={tw`bg-[#FFD400] w-[215px] h-[55px] justify-center items-center rounded-[12px] mt-6`}>
          <TouchableOpacity onPress={handleGenerateSolution}>
            <Text style={tw`text-[#01296B] font-bold text-base`}>
              Generate solutions
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
