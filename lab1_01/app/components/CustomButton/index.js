import { StyleSheet, Text, TouchableOpacity } from "react-native";

function CustomButton({
  children,
  bg = "yellow",
  textColor = "black",
  style = {},
  ...passProp
}) {
  const styleWrapper = [
    styles.wrapper,
    {
      backgroundColor: bg,
    },
    style,
  ];
  return (
    <TouchableOpacity style={styleWrapper} {...passProp}>
      <Text style={[styles.text, { color: textColor }]}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3C000",
    height: 45,
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 21,
  },
});
export default CustomButton;
