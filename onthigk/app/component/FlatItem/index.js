import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function FlatItem({ handleDelete, item, index }) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.text1}>
        <Text>{index}</Text>
      </View>
      <Text style={styles.text2}>{item}</Text>
      <TouchableOpacity
        onPress={() => handleDelete(index)}
        style={styles.delete}
      >
        <Text style={{ color: "white" }}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    flex: 1,
    height: 40,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text1: {
    marginLeft: 20,
    borderWidth: 1,
    height: "80%",
    width: 40,
    lineHeight: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    flex: 1,
    paddingLeft: 50,
    height: "80%",
    justifyContent: "center",
  },
  delete: {
    height: "80%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginRight: 20,
  },
});
export default FlatItem;
