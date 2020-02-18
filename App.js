import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState('Spencer');
  const [person, setPerson] = useState('');

  
  const clickHandler = () => {
    setName('Spenmo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Heyoo!</Text>
      </View>

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
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  }
});
