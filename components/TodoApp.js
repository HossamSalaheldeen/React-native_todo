import React, { useState, useEffect } from "react";
import AppBar from "./AppBar";
import TodoList from "./TodoList";
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    ScrollView
  } from "react-native";
import { block } from "react-native-reanimated";


export default function TodoAPP() {
const [title, setTitle] = useState("");

  // iniitalize empty object todo
  const [todo, setTodo] = useState({});

  // Initalize empty array to store todos
  const [todos, setTodos] = useState([]);

  // function to add todo object in todo list
  const addTodo = () => {
    if (title.length > 0) {
      // Add todo to the list
      setTodos([...todos, { key: Date.now(), name: title, isChecked: false }]);
      // clear the value of the textfield
      setTitle("");
    }
  };

  // function to delete todo from the todo list
  const deleteTodo = id => {
    // loop through todo list and return todos that don't match the id
    // update the state using setTodos function
    setTodos(todos.filter(todo => {
      return todo.key !== id;
    }));
  };

  useEffect(() => {
    console.log(todos.length, "TodoList length");
  }, [todos]);

  return (
    <View >
      <View style={styles.statusBar}></View>
      <AppBar />
      <View style={styles.todo}>
        <TextInput
          placeholder="Add task"
          value={title}
          onChangeText={value => setTitle(value)}
          style={styles.textbox}
        />
        <Button title = "Add"  onPress={() => addTodo()} />
      </View>
      <ScrollView>
        {todos.map(todo => (
          <TodoList
            key={todo.key}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    statusBar: {
      backgroundColor: "#0069D9",
      color: "#fff",
      width: "100%",
      height: 30
    },
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start"
    },
    todo: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    },
    textbox: {
      borderWidth: 1,
      borderColor: "#0069D9",
      borderRadius: 8,
      padding: 10,
      margin: 10,
      width: "80%"
    }
  });