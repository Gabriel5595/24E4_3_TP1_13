import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TaskInput({ onAddTask }) {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        onAddTask(task);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Digite uma tarefa"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Adicionar" onPress={handleAddTask} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        width: '100%',
        borderRadius: 5,
    },
});
