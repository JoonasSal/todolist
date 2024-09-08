import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggleDone }) => {
  return (
    <TouchableOpacity onPress={onToggleDone}>
      <View style={styles.item}>
        <Text style={[styles.text, task.done && styles.done]}>{task.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: { padding: 15},
  text: { fontSize: 18 },
  done: { textDecorationLine: 'line-through' }
});

export default TaskItem;