import { Image, Text, View } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import styles from "./style";
import images from "../../assets/images";
function Login() {
  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 25, fontWeight: "700", marginTop: 40 }}>
        LOGIN
      </Text>
      <View style={styles.form}>
        <CustomInput placeholder="Email" style={styles.emailInput} />
        <CustomInput placeholder="Password" secureTextEntry={true} />
        <CustomButton textColor="white" bg="red" style={{ marginTop: 60 }}>
          Login
        </CustomButton>
      </View>
      <Text style={styles.text}>When you agree to terms and conditions</Text>
      <Text style={[styles.text, { color: "rgba(93, 37, 250, 1)" }]}>
        For got your password?
      </Text>
      <Text style={styles.text}>Or login with</Text>
      <View style={styles.btnLoginWith}>
        <CustomButton style={{ flex: 1, backgroundColor: "#25479B" }}>
          <Image source={images.fbicon} />
        </CustomButton>
        <CustomButton style={{ flex: 1, backgroundColor: "#0F8EE0" }}>
          <Image source={images.zaloicon} />
        </CustomButton>
        <CustomButton
          style={{
            flex: 1,
            backgroundColor: "transparent",
            borderWidth: 1,
            borderColor: "rgba(6, 128, 241, 1)",
          }}
        >
          <Image source={images.ggicon} />
        </CustomButton>
      </View>
    </View>
  );
}

export default Login;
