import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TaskItem({ task, onRemove }) {
    return (
        <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{task.title}</Text>
            <TouchableOpacity onPress={() => onRemove(task.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>Remover</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        width: '100%',
        borderRadius: 5,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    taskText: {
        fontSize: 18,
    },
    removeButton: {
        backgroundColor: '#ff6347',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    removeButtonText: {
        color: '#fff',
        fontSize: 14,
    },
});
