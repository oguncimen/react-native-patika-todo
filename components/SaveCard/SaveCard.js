import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import styles from "./SaveCard.style";

const SaveCard = (props) => {
  const [buttonColor, setButtonColor] = useState(false);
  const [todoText, setTodoText] = useState();
  const saveButtonHandler = () => {
    props.saveTodo(todoText);
    buttonColorHandler();
    setTodoText("");

  };
  function saveText(text) {
    setTodoText(text);
    setButtonColor(true);
  }
  function buttonColorHandler() {
    return setButtonColor(!buttonColor);
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={saveText}
        style={styles.todoText}
        placeholder="Yapılacak..."
        placeholderTextColor="#817f83"
        value={todoText}
      />
      <TouchableOpacity
        style={[buttonColor ? styles.saveButtonChanged : styles.saveButton]}
        onPress={saveButtonHandler}
      >
        <Text style={styles.saveButtonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SaveCard;
