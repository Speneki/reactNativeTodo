import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function TodoItem({ item }) { 
    return (
        <TouchableOpacity>
            <Text style={styles.item}>{item.task}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16, 
        margin: 16,
        borderColor: '#bbb',
        borderWidth: 1,
    }
})