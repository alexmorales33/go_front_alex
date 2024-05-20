import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ComponentE, FirstPoint, SecondPoint} from './src/pages';
import React from 'react';

export type RootStackParamList = {
  FirstPoint: undefined;
  SecondPoint: undefined;
  ComponentE: undefined;
};

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstPoint" component={FirstPoint} />
        <Stack.Screen name="SecondPoint" component={SecondPoint} />
        <Stack.Screen name="ComponentE" component={ComponentE} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
