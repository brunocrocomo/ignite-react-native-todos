import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

import { Theme } from '../utils/enums';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [theme, setTheme] = useState(Theme.light);

  const themedStyles = theme === Theme.light ? lightStyles : darkStyles;

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) {
      return;
    }

    const task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((prevTasks) => [...prevTasks, task]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((task) => task.id === id);

      if (taskIndex < 0) {
        return prevTasks;
      }

      const updatedTasks = [...prevTasks];

      updatedTasks[taskIndex].done = true;

      return updatedTasks;
    });
  }

  function handleRemoveTask(id: number) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <View style={themedStyles.container}>
      <Header theme={theme} setTheme={setTheme} />

      <TodoInput theme={theme} addTask={handleAddTask} />

      <MyTasksList
        theme={theme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </View>
  );
}

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
});
