'use client';
import { useState } from 'react';
import { TodoForm } from '@/components/TodoForm';
import { TodoList } from '@/components/TodoList';
export interface Todo {
  id: string;
  completed: boolean;
  name: string;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleDelete(id: string) {
    setTodos((todos) => {
      return todos.filter((todo) => todo.id !== id);
    });
  }

  function handleToggleComplete(id: string) {
    setTodos((todos) => {
      return todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  }

  function onSubmitTodoForm(newItem: string) {
    setTodos((todos) => {
      return [
        ...todos,
        {
          completed: false,
          id: crypto.randomUUID(),
          name: newItem,
        },
      ];
    });
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <TodoForm onSubmit={onSubmitTodoForm} />
      <h2 className="text-2xl font-bold mb-4">My Todos</h2>
      <TodoList
        todos={todos}
        onToggleCheckbox={handleToggleComplete}
        onDeleteClick={handleDelete}
      />
    </div>
  );
}

export default App;
