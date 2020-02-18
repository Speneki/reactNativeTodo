import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo() {
    const [todo, setTodo] = useState('');

    const changeHandler = (val) => {
        setTodo(val)
    }

    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='new Todo...'
                onChangeTextHandler={changeHandler}
            />
            <Button
                onPress={() => console.log(todo)} title='add todo' color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingHorizontal: 6,
})