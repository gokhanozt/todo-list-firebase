import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  // useEffect(() => {
  //   const q = query(collection(db, "td"));
  //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //     let todoArr = [];
  //     querySnapshot.forEach((doc) => {
  //       todoArr.push({ ...doc.data(), id: doc.id });
  //       setTodos(todoArr);
  //     });
  //   });
  //   return () => unsubscribe();
  // }, []);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
