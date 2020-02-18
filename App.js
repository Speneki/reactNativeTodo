import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {task: 'eat beans', key: '1'},
    {task: 'make money', key: '2'},
    {task: 'slap bass', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key )
    })
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to from */}

        <View style={styles.list}>

          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
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
  },

});
