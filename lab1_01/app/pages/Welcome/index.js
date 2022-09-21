import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import images from "../../assets/images";
import CustomButton from "../../components/CustomButton";

function Welcome({ navigation }) {
  console.log(images.background);
  return (
    <ImageBackground source={images.background} style={styles.container}>
      <ImageBackground
        source={images.circle}
        style={styles.circleView}
      ></ImageBackground>
      <Text style={styles.text}>GROW {"\n"} YOUR BUSINESS</Text>
      <Text style={styles.text1}>
        We will help you to grow your business using online server
      </Text>
      <View style={styles.groupButton}>
        <CustomButton
          style={{ width: 125 }}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          Login
        </CustomButton>
        <CustomButton
          style={{ width: 125 }}
          onPress={() => {
            navigation.navigate("register");
          }}
        >
          Register
        </CustomButton>
      </View>
      <Text
        onPress={() => {
          navigation.navigate("detail");
        }}
        style={{
          fontSize: 18,
          fontWeight: "700",
          marginTop: 30,
        }}
      >
        HOW WE WORK?
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
  },
  circleView: {
    width: 142,
    height: 142,
  },
  text: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 29,
    textAlign: "center",
    marginTop: 66,
  },
  text1: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 18,
    width: 302,
    textAlign: "center",
    marginTop: 66,
  },
  groupButton: {
    marginTop: 66,
    width: 302,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Welcome;
