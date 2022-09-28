import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../assets";

function Footer() {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity>
        <Image source={images.navIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={images.homeIcon}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={images.queuIcon}></Image>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    backgroundColor: "#1BA9FF",
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
});
export default Footer;
