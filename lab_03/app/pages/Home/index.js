import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { images } from "../../assets";

const data = [
  {
    id: 1,
    image: images.vsmartXanh,
    name: "Điện thoại VSmart Joy 3 - Hàng chính hãng",
    price: "1.790.000 đ",
    color: "xanh",
  },
  {
    id: 2,
    image: images.vsmartBlack,
    name: "Điện thoại VSmart Joy 3 - Hàng chính hãng",
    price: "1.790.000 đ",
    color: "black",
  },
  {
    id: 3,
    image: images.vsmartBac,
    name: "Điện thoại VSmart Joy 3 - Hàng chính hãng",
    price: "1.790.000 đ",
    color: "bac",
  },
  {
    id: 4,
    image: images.vsmartRed,
    name: "Điện thoại VSmart Joy 3 - Hàng chính hãng",
    price: "1.790.000 đ",
    color: "red",
  },
];

function Home({ navigation }) {
  const [product, setProduct] = useState(data[1]);
  return (
    <View style={styles.wrapper}>
      <Image
        resizeMode="contain"
        style={styles.imageContent}
        source={product.image}
      />
      <Text style={styles.textTitle}>{product.name}</Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          paddingTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View style={styles.stars}>
          <Image source={images.star} />
          <Image source={images.star} />
          <Image source={images.star} />
          <Image source={images.star} />
          <Image source={images.star} />
        </View>
        <Text style={{ paddingEnd: 40 }}>(Xem 828 đánh giá)</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingTop: 13,
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.textPrice}>{product.price}</Text>
        <Text
          style={{
            textDecorationLine: "line-through",
            fontWeight: "700",
            color: "#00000094",
            paddingRight: 60,
          }}
        >
          {product.price}
        </Text>
      </View>
      <View style={styles.refunds}>
        <Text style={styles.refund}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image style={styles.hoi} source={images.hoi}></Image>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SelectColor", {
            products: data,
            current: product,
            setCurrent: setProduct,
          });
        }}
        style={styles.buttonSelectColor}
      >
        <Text style={styles.textButton}>4 MÀU-CHỌN MÀU</Text>
        <Image style={styles.vector} source={images.vector}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBuy}>
        <Text style={styles.textBuy}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#FFFFFF",
    padding: 28,
  },
  imageContent: {
    alignSelf: "center",
    width: 258,
    height: 320,
  },
  textTitle: {
    paddingTop: 26,
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
  },
  stars: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textPrice: {
    fontWeight: "700",
    fontSize: 18,
  },
  refunds: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
  },
  refund: {
    fontWeight: "700",
    fontSize: 12,
    color: "red",
    paddingEnd: 10,
  },
  buttonSelectColor: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#00000075",
    height: 34,
    borderRadius: 10,
    marginTop: 19,
    shadowColor: "#00000040",
  },
  textButton: {
    flex: 1,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
    fontStyle: "normal",
  },
  vector: {
    marginRight: 10,
  },
  buttonBuy: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CA1536",
    height: 44,
    backgroundColor: "#EE0A0A",
    borderRadius: 10,
    marginTop: 60,
  },
  textBuy: {
    color: "#F9F2F2",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 24,
  },
});
export default Home;
