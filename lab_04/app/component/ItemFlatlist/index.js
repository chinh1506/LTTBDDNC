import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function ItemFlatlist({ item }) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        style={{ width: 80, height: "100%" }}
        source={{ uri: item.photo }}
      ></Image>
      <View style={styles.infor}>
        <Text>{item.name}</Text>
        <Text style={{ color: "#E83030" }}>
          <Text style={{ color: "#7D5B5B" }}>Shop</Text> {item.position}
        </Text>
      </View>

      <TouchableOpacity style={styles.buttonChat}>
        <Text style={{ color: "#FFFFFF" }}>Chat</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
  },
  infor: {
    paddingLeft: 17,
    flex: 1,
  },
  buttonChat: {
    width: 90,
    height: 40,
    backgroundColor: "#F31111",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
});
export default ItemFlatlist;
