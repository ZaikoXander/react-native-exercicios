import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10
  },
  inputContainer: {
    marginBottom: 15,
    gap: 5,
  },
  input: {
    borderBlockColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  button: {
    backgroundColor: 'lightblue',
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    marginBottom: 10,
    text: {
      fontSize: 20,
    }
  },
  result: {
    fontSize: 30,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
})

export default styles
