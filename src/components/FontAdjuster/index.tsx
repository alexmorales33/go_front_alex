import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface FontAdjusterProps {
  fontSize: number;
  setFontSize: (size: number) => void;
}

const FontAdjuster: React.FC<FontAdjusterProps> = ({fontSize, setFontSize}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setFontSize(fontSize - 1)}
        accessibilityLabel="Decrease font size">
        <Text style={styles.buttonText}>Decrease Font Size</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setFontSize(fontSize + 1)}
        accessibilityLabel="Increase font size">
        <Text style={styles.buttonText}>Increase Font Size</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FontAdjuster;
