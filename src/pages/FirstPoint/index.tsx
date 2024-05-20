import React, {useState, useCallback} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {styles} from './styled';
import Grid from '../../components/Grid';
import {TextInputComponentProps} from '../SecondPoint/types';

const TextInputComponent = React.memo(
  ({numItems, setNumItems}: TextInputComponentProps) => {
    const handleNumItemsChange = useCallback((text: string) => {
      const num = parseInt(text, 10);
      if (!isNaN(num) && num > 0) {
        setNumItems(num);
      } else {
        setNumItems(0);
      }
    }, []);

    return (
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Enter the number of views to render:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={handleNumItemsChange}
          value={String(numItems)}
          placeholder="Enter number of items"
        />
      </View>
    );
  },
);

export const FirstPoint = () => {
  const [numItems, setNumItems] = useState(40);

  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.header}>
        <TextInputComponent numItems={numItems} setNumItems={setNumItems} />
      </View>
      <View style={styles.section}>
        <Grid numItems={numItems} />
      </View>
    </ScrollView>
  );
};

export default FirstPoint;
