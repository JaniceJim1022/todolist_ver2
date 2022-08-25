import React, { useState } from "react";
import { Item } from "./model";
import ToDoItem from "./ToDoItem";

// const tasks: Item = [
//   {
//     id: 1,
//     task: "Lecture",
//     completed: false,
//   },
//   {
//     id: 2,
//     task: "Lunch",
//     completed: false,
//   },
//   {
//     id: 3,
//     task: "Dinner",
//     completed: false,
//   },
// ];

export default function ToDoList() {
  const [todos, setTodos] = useState<Item[]>([]);
  const [input, setInput] = useState("");
  const [done, setDone] = useState<Item[]>([]);

  return (
    <>
      <h1>
        Completed Task:
        {todos.reduce((acc, current) => {
          return acc + (current.completed ? 1 : 0);
        }, 0)}
      </h1>

      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => {
          setInput(e.currentTarget.value);
        }}
      />
      <button //加d task入todo[]
        onClick={() => {
          setTodos((todos) => [
            ...todos,
            {
              id: Date.now(),
              task: input, // how to write this?
              completed: false,
            },
          ]);
        }}
      >
        Add
      </button>

      {
        // to do items
        todos
          .filter((todo) => todo.completed == false)
          .map((todo, index) => (
            <ToDoItem
              task2={todo}
              onToggleComplete={() => {
                const newTodos = todos.slice(); 
                newTodos[index] = {
                  ...newTodos[index],
                  completed: !newTodos[index].completed,    
                };
                setTodos(newTodos); 
                console.log(newTodos);
              }}
              key={todo.id}
            />
          ))
      }

      <h2>Completed Task:</h2>
      {
        //completed task
        todos
          .filter((todo) => todo.completed == true)
          .map((done, index) => (
            <ToDoItem task2={done} key={index} />
          ))
      }
    </>
  );
}
