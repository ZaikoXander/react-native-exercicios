import { useEffect, useState } from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function App() {
  const [counter, setCounter] = useState<number>(0)

  function updateCounter(increment: boolean) {
    if (!increment) {
      if (counter === 0) {
        return
      }

      setCounter(counter - 1)
      return
    }

    setCounter(counter + 1)
  }

  useEffect(() => {
    if (counter === 20) {
      alert('Limite de pessoas atingido! Expulsa todo mundo!')
      setCounter(0)
    }
  }, [counter])
  

  return (
    <SafeAreaView>
      <Text style={styles.title}>Contador de pessoas</Text>
      <Text
        style={{ 
          ...styles.counter,
          color: counter < 11 ? 'black' : 'red'
        }}
      >
        { counter }
      </Text>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...styles.plus,
          marginBottom: 10,
        }}
        onPress={() => updateCounter(true)}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          ...styles.button,
          ...styles.minus,
        }}
        onPress={() => updateCounter(false)}
        onLongPress={() => setCounter(0)}
      >
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
