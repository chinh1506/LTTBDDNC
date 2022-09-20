import { StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

function Register() {
  return (
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 25, fontWeight: "700", marginTop: 40 }}>
        LOGIN
      </Text>
      <View style={styles.registerForm}>
        <CustomInput style={styles.input} placeholder="Name" />
        <CustomInput style={styles.input} placeholder="Phone" />
        <CustomInput style={styles.input} placeholder="Email" />
        <CustomInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <CustomInput style={styles.input} placeholder="Birthday" />

        <CustomButton style={styles.input} textColor="white" bg="red">
          Register now
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(49, 170, 82, 0.19)",
  },
  registerForm: {
    marginTop: 40,
    marginRight: 15,
    marginLeft: 15,
  },
  input: {
    marginTop: 10,
  },
});
export default Register;
