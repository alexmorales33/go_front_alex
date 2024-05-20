import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './styled';
import ComponentD from '../../components/ComponentD';

export const ComponentE = () => {
  return (
    <ScrollView
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}>
      <View style={styles.section}>
        <ComponentD statusText="Component D[0]" />
        <ComponentD statusText="Component D[1]" />
      </View>
    </ScrollView>
  );
};
