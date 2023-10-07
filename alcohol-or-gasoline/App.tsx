import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';

export default function App() {
  const [gasoline, setGasoline] = useState<number>(0)
  const [alcohol, setAlcohol] = useState<number>(0)

  const [result, setResult] = useState<'Gasolina' | 'Álcool'>()

  function onChangeGasoline(e: any) {
    setGasoline(Number(e.currentTarget.value))
  }

  function onChangeAlcohol(e: any) {
    setAlcohol(Number(e.currentTarget.value))
  }

  function onVerifyButtonClick() {
    setResult(gasoline && alcohol ? alcohol / gasoline < 0.7 ? 'Álcool' : 'Gasolina' : undefined)
  }

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>Álcool ou Gasolina</Text>
        <Image
          source={ require('./assets/alcohol-or-gasoline.jpg') }
          style={{ width: 200, height: 200, borderRadius: 5 }}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ display: 'flex', flexDirection: 'column', fontSize: 20 }}>
          Preço da gasolina
          <TextInput
            placeholder='5,80'
            inputMode='numeric'
            style={{
              marginBottom: 20,
              borderBlockColor: 'black',
              borderWidth: 2,
              borderRadius: 10,
              padding: 5
            }}
            placeholderTextColor='gray'
            onChange={onChangeGasoline}
          />
        </Text>
        <Text style={{ display: 'flex', flexDirection: 'column', fontSize: 20 }}>
          Preço do álcool
          <TextInput
            placeholder='2,51'
            inputMode='numeric'
            style={{ borderBlockColor: 'black', borderWidth: 2, borderRadius: 10, padding: 5 }}
            placeholderTextColor='gray'
            onChange={onChangeAlcohol}
          />
        </Text>
        <Pressable
          style={{
            backgroundColor: '#7FFFD4',
            borderRadius: 10,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginTop: 20
          }}
          onPress={onVerifyButtonClick}
        >
          <Text
            style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}
          >
            Verificar
          </Text>
        </Pressable>
      </View>
      <Text style={{ marginTop: 20, color: 'green', fontSize: 30 }}>
        { result }
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
