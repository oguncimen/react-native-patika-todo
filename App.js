import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import SaveCard from "./components/SaveCard";
import TodoCard from "./components/TodoCard";
import todoItem from "./Models/todoItem";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log(todos.length);
    setCounter(todos.length);
  }, [todos]);
  const saveHandler = (text) => {
    const todo = new todoItem(new Date(), text);
    todos.push(todo);
    setTodos(todos);
  };

  const todoItems = ({ item }) => {
    console.log("deneme");
    return <TodoCard todos={item}></TodoCard>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Yapılacaklar</Text>
        <Text style={styles.counterText}>{counter}</Text>
      </View>
      <View style={styles.todos}>
        <FlatList renderItem={todoItems} data={todos}></FlatList>
      </View>
      <View style={styles.saveCard}>
        <SaveCard saveTodo={saveHandler}></SaveCard>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f2027",
  },
  todos: {
    margin: 1,
    flex: 1,
  },
  counterContainer: {
    flexDirection: "row",
    marginTop: 25,
    padding: 10,
    justifyContent: "space-between",
  },
  counterText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "orange",
  },
});
