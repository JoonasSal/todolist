import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    onAddTask(task);
    setTask('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter task"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Pressable
      onPress={handleAddTask} >
        <Text style={styles.saveText}>Save</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  input: { flex: 1,  marginRight: 10, padding: 5, fontSize: 20},
  saveText: { color: 'blue', fontSize: 20 }
});

export default TaskInput;