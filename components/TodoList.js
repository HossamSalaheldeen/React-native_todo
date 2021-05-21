import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function TodoList(props) {
  return (
    <View style={styles.listTile}>
      <Text style={styles.title}>{props.todo.name}</Text>
      <Icon
        name="delete"
        style={styles.trailing}
        size={20}
        color="#0069D9"
        onPress={() => props.deleteTodo(props.todo.key)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listTile: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#666666"
  },
  leading: {
    width: "20%"
  },
  title: {
    width: "60%",
    fontSize: 18
  },
  trailing: {
    width: "20%"
  }
});