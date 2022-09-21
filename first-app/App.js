import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const setValueForInput = () => {
    setText(value);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={{ color: "red", width: "100%", borderWidth: 1 }}
        value={value}
        onChangeText={(e) => setValue(e)}
      ></TextInput>
      <Button title="click" onPress={setValueForInput}></Button>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
