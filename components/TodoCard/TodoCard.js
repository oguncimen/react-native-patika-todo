import React from "react";
import { View, Text } from "react-native";
import styles from "./TodoCard.style";

const TodoCard = ({ todos }) => {
  return (
      <View style={styles.todos}>
        <Text style={styles.text}>{todos.text}</Text>
      </View>
  );
};

export default TodoCard;
