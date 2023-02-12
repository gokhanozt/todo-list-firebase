import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import firebaseApp, { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase, ref, push } from "firebase/database";
const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  // const [input, setTaskName] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const db2 = getDatabase();

    const todoRef = ref(db2, "/todos");
    const todo = {
      id: uuidv4(),
      input,
      completed: false,
    };
    push(todoRef, todo);
    setInput("");
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo("");
  };

  // useEffect(() => {
  //   if (editTodo) {
  //     setInput(editTodo.title);
  //   } else {
  //     setInput("");
  //   }
  // }, [setInput, editTodo]);

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        name=""
        id="input"
        className="task-input"
        placeholder="Enter a Todo..."
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="button-add" type="submit">
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;
