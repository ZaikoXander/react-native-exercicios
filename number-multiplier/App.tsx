import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';

import styles from './styles';

export default function App() {
  const [numbers, setNumbers] = useState<number[]>([0, 0])
  const [multiplication, setMultiplication] = useState<number>(0)

  function handleInput(value: string, index: number): void {
    const newNumbers = [...numbers]
    newNumbers[index] = Number(value)
    setNumbers(newNumbers)
  }

  function handleButtonPress(): void {
    setMultiplication(numbers[0] * numbers[1])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Multiplicador de Números
      </Text>
      <View style={styles.inputContainer}>
        {
          [0, 1].map(index => (
            <TextInput
              style={styles.input}
              placeholder={`${!index ? 'Primeiro' : 'Segundo'} nº`}
              placeholderTextColor={'gray'}
              onChangeText={(value) => handleInput(value, index)}
              key={index}
            />
          ))
        }
      </View>
      <Pressable
        style={styles.button}
        onPress={handleButtonPress}
      >
        <Text style={styles.button.text}>Calcular</Text>
      </Pressable>
      <Text style={styles.result}>
        Resultado: { multiplication }
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


