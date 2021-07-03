import React, { useState } from "react";

import { Header } from "../components/Header";
import { MyTasksList } from "../components/MyTasksList";
import { TodoInput } from "../components/TodoInput";

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </>
  );
}
