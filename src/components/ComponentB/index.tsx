import React from 'react';
import {View, Text} from 'react-native';
import {useFontSize} from '../../hooks';
import FontAdjuster from '../FontAdjuster';
import {styles} from './styles';

const ComponentB: React.FC = () => {
  const {fontSize, setFontSize} = useFontSize();

  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize}]}>
        Component B - Font Size: {fontSize}
      </Text>
      <FontAdjuster fontSize={fontSize} setFontSize={setFontSize} />
    </View>
  );
};

export default ComponentB;
