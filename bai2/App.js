import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [kq, setKq] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput value={a} onChangeText={(e) => setA(e)} style={styles.input} />
      <TextInput value={b} onChangeText={(e) => setB(e)} style={styles.input} />

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => setKq(Number.parseInt(a) + Number.parseInt(b))}
          style={styles.button}
        >
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setKq(Number.parseInt(a) - Number.parseInt(b))}
          style={styles.button}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setKq(Number.parseInt(a) * Number.parseInt(b))}
          style={styles.button}
        >
          <Text>x</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setKq(Number.parseInt(a) / Number.parseInt(b))}
          style={styles.button}
        >
          <Text>/</Text>
        </TouchableOpacity>
      </View>
      <Text>{kq}</Text>
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
  input: {
    borderWidth: 1,
    width: "90%",
    height: 40,
    margin: 10,
  },
  button: {
    flexDirection: "row",
    margin: 40,
    padding: 10,
    width: 40,
    backgroundColor: "blue",
    justifyContent: "center",
    color: "#fff",
  },
  buttonGroup: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
