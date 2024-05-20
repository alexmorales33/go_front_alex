import React from 'react';
import {Text} from 'react-native';
import {FontSizeProvider} from '../../hooks';
import ComponentA from '../ComponentA';
import ComponentB from '../ComponentB';
import ComponentC from '../ComponentC';
import {styles} from './styles';
import {ComponentDProps} from './types';

const ComponentD: React.FC<ComponentDProps> = ({statusText}) => {
  return (
    <FontSizeProvider>
      <Text style={styles.text}>{statusText}</Text>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </FontSizeProvider>
  );
};

export default ComponentD;
