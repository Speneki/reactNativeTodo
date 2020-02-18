import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function App() {
  const [todos, setTodos] = useState([
    {task: 'eat beans', key: '1'},
    {task: 'make money', key: '2'},
    {task: 'slap bass', key: '3'}
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.content}>
        {/* to from */}

        <View style={styles.list}>

          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <Text>{item.task}</Text>
            )}
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }

});
