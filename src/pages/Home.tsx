import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";
import { SelectThemeModal } from "../components/SelectThemeModal";
import { colors, Theme } from "../styles/colors";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isVisible, setVisible] = useState(false);
  const [theme, setTheme] = useState(colors.light);

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      done: false,
    };

    setTasks((current) => [newTask, ...current]);
  }

  function handleMarkTaskAsDone(id: number) {
    setTasks((current) =>
      current.map((task) => ({
        ...task,
        done: task.id === id ? !task.done : task.done,
      }))
    );
  }

  function handleRemoveTask(id: number) {
    setTasks((current) => current.filter((task) => task.id !== id));
  }

  function handleChangeTheme(theme: Theme) {
    setTheme(theme);
    setVisible(false);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.backgroundContrast,
      }}
    >
      <Header theme={theme} onPress={() => setVisible(true)} />

      <TodoInput theme={theme} addTask={handleAddTask} />

      <MyTasksList
        theme={theme}
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
      <SelectThemeModal
        visible={isVisible}
        onPress={handleChangeTheme}
        onRequestClose={() => setVisible((current) => !current)}
      />
    </View>
  );
}
