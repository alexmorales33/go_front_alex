import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './styled';
import DebouncedInput from '../../components/DebounceInput';

export const SecondPoint = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Input that captures when you stop writing :
        </Text>
        <DebouncedInput />
      </View>
      <View style={styles.section} />
    </ScrollView>
  );
};
