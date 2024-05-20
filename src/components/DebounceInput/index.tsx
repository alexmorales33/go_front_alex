import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './styles';

const DebouncedInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setDisplayValue(inputValue);
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inputValue]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={handleChange}
        placeholder="Input with delay..."
      />
      {displayValue ? (
        <Text style={styles.text}>Delay: {displayValue}</Text>
      ) : null}
    </View>
  );
};

export default DebouncedInput;
