import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../assets";

function Header() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image source={images.backIcon}></Image>
      </TouchableOpacity>
      <Text style={{ color: "#FFFFFF" }}>Chat</Text>
      <TouchableOpacity>
        <Image source={images.storeIcon}></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: "#1BA9FF",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default Header;
