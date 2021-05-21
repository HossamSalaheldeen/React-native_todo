import React, { useState, useEffect } from "react";
import { NativeRouter, Route, Link } from "react-router-native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView
} from "react-native";
import AppBar from "./components/AppBar";
import TodoList from "./components/TodoList";
import TodoApp from "./components/TodoApp";
import Login from "./components/Login";
import ImagePickerExample from "./components/ImagePickerEx";

export default function App() {
  // const [title, setTitle] = useState("");

  // // iniitalize empty object todo
  // const [todo, setTodo] = useState({});

  // // Initalize empty array to store todos
  // const [todos, setTodos] = useState([]);

  // // function to add todo object in todo list
  // const addTodo = () => {
  //   if (title.length > 0) {
  //     // Add todo to the list
  //     setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
  //     // clear the value of the textfield
  //     setTitle("");
  //   }
  // };

  // // function to mark todo as checked or unchecked
  // const checkTodo = id => {
  //   // loop through todo list and look for the the todo that matches the given id param
  //   // update the state using setTodos function
  //   setTodos(
  //     todos.map(todo => {
  //       if (todo.key === id) {
  //         todo.isChecked = !todo.isChecked;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  // // function to delete todo from the todo list
  // const deleteTodo = id => {
  //   // loop through todo list and return todos that don't match the id
  //   // update the state using setTodos function
  //   setTodos(todos.filter(todo => {
  //     return todo.key !== id;
  //   }));
  // };

  // useEffect(() => {
  //   console.log(todos.length, "TodoList length");
  //   //console.log(todos);
  // }, [todos]);

  return (
    <NativeRouter>
    <View style={styles.container} >
    <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Todo</Text>
        </Link>
        <Link
          to="/login"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Login</Text>
        </Link>
        <Link
          to="/profile"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Profile</Text>
        </Link>

        </View>
        <Route exact path="/" component={TodoApp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={ImagePickerExample} />
        {/* </View> */}
      {/* <TodoApp />
      <Login />
      
      <ImagePickerExample /> */}
    </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 30
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap:'wrap'
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
});