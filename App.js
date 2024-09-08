import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([]);

  // load tasks from asyncstorage
  useEffect(() => {
    const loadTasks = async () => {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    };
    loadTasks();
  }, []);

  //  save to asyncstorage
  useEffect(() => {
    const saveTasks = async () => {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    };
    saveTasks();
  }, [tasks]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { id: Date.now().toString(), text: task, done: false }]);
    }
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggleDone={() => toggleTaskDone(item.id)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 40 },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
});

export default App;