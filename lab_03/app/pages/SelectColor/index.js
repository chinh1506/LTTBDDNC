import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function SelectColor({ route, navigation }) {
  const { products, current, setCurrent } = route.params;
  if (!current) setCurrent(products[1]);

  const [p, setP] = useState(current);

  const handleChangeColor = (product) => {
    setP(product);
    setCurrent(product);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Image resizeMode="contain" style={styles.image} source={p.image} />
        <Text style={styles.title}>
          Điện Thoại Vsmart Joy 3{"\n"} Hàng chính hãng
        </Text>
      </View>
      <View style={styles.container}>
        <Text>Chọn một màu bên dưới:</Text>
        <View style={styles.boxs}>
          <TouchableOpacity
            onPress={() => handleChangeColor(products[2])}
            style={styles.box}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeColor(products[3])}
            style={[styles.box, { backgroundColor: "#F30D0D" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeColor(products[1])}
            style={[styles.box, { backgroundColor: "#000000" }]}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleChangeColor(products[0])}
            style={[styles.box, { backgroundColor: "#234896" }]}
          ></TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.btnFullfil}
        >
          <Text style={styles.textFullFil}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
  },
  header: {
    width: "100%",
    height: 150,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    padding: 17,
  },
  image: {
    width: 119,
    height: 126,
  },
  title: {
    padding: 5,
    fontWeight: "400",
    lineHeight: 18,
  },
  container: {
    flex: 1,
    padding: 17,
    backgroundColor: "#C4C4C4",
  },
  boxs: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "100%",
    flex: 1,
  },
  box: {
    width: 80,
    height: 85,
    backgroundColor: "#C5F1FB",
  },
  btnFullfil: {
    width: "100%",
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1952E294",
  },
  textFullFil: {
    color: "#F9F2F2",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23,
    fontFamily: "Roboto",
  },
});
export default SelectColor;
