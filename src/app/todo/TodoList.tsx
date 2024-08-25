"use client";

import { useState } from "react";
// import DeleteButton from "./DeleteButton";

interface Todo {
  id: string;
  title: string;
}

interface TodoListProps {
  initialTodos: Todo[];
}

const TodoList = ({ initialTodos }: TodoListProps) => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <ul className="max-w-sm">
      {todos.map((todo) => (
        <li key={todo.id} className="mb-4 flex justify-between">
          {todo.title} 
          {/* {todo.title} <DeleteButton id={todo.id} /> */}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;