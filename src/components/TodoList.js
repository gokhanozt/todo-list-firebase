import React, { useState, useEffect } from "react";
import firebaseApp, { db } from "../firebase";
import {
  getDatabase,
  ref,
  push,
  child,
  onValue,
  remove,
  update,
} from "firebase/database";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const [todoList, setTodoList] = useState("");
  // const db = getDatabase(firebaseApp);

  useEffect(() => {
    const db2 = getDatabase();
    const todoRef = ref(db2, "/todos");

    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      const newTodoList = [];

      for (let id in todos) {
        newTodoList.push({ id, ...todos[id] });
      }

      setTodoList(newTodoList);
    });
  }, []);

  const handleDelete = (todo) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    const db2 = getDatabase();

    // console.log(todo, "todo");
    // console.log(todoList, "todoList");
    // todoList.filter((x) => x.id === todo.id);
    // const item = todoList.find((item) => item.id === todo.id);
    // var filtered = todoList.filter(function (item) {
    //   return item.id !== todo.id;
    // });

    // console.log("filteredarr:", filtered);
    // setTodoList(filtered);
    // setTodoList(todoList);
    // const todoRef = ref(db, "todos/").child();
    // todoRef.ref("Todo").child(todo.id);
    // const todoRef = ref(db, "/todos/" + todo.id);
    // console.log(todoRef, "todoRef");
    // create DatabaseReference

    // remove(todoRef).then(() => console.log("Deleted"));
    // console.log(todoRef, "todoRef2");
    // todoRef.remove();
    const newPostKey = push(child(ref(db2), "/todos")).key;
    const updates = {};
    updates["/todos/" + newPostKey] = todos;
    updates["/todos/" + todo.id + "/" + newPostKey] = "NEWW";
    update(ref(db2), updates);
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return todoList ? (
    <div>
      {todoList.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            disabled="disabled"
            value={todo.input}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div className="button-container">
            <button className="button-complete task-button">
              <i
                className="icons fa fa-check-circle"
                onClick={() => handleComplete(todo)}
              ></i>
            </button>
            <button className="button-edit task-button">
              <i
                className="icons fa fa-edit"
                onClick={() => handleEdit(todo)}
              ></i>
            </button>
            <button className="button-delete task-button">
              <i
                className="icons fa fa-trash"
                onClick={() => handleDelete(todo)}
              ></i>
            </button>
          </div>
        </li>
      ))}{" "}
    </div>
  ) : (
    <div className="loader">
      <img src={process.env.PUBLIC_URL + "/loading.gif"} alt="loading" />
    </div>
  );
};

export default TodoList;
