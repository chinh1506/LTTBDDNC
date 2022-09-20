import { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../../assets/images";

function CustomInput({ secureTextEntry, style, ...passProp }) {
  const [showPass, setShowPass] = useState(secureTextEntry);

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <View style={[styles.wrapper, style]}>
      <TextInput
        secureTextEntry={showPass}
        style={styles.input}
        {...passProp}
      />
      {secureTextEntry && (
        <TouchableOpacity style={styles.showButton} onPress={handleShowPass}>
          <Image source={images.eye} />
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "rgba(196, 196, 196, 0.3)",
    height: 54,
    width: "100%",
  },
  input: {
    marginLeft: 20,
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    lineHeight: 21,
  },
  showButton: {
    marginRight: 20,
  },
});
export default CustomInput;
