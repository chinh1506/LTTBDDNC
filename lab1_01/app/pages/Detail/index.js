import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import images from "../../assets/images";
import CustomButton from "../../components/CustomButton";
function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.heading}>
          <Image
            resizeMode="contain"
            style={styles.imgHeading}
            source={images.book}
          />
          <View style={styles.detailHeading}>
            <Text style={styles.textTitle}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.textTitle}>Cung cấp bởi tikki trending</Text>
            <Text style={styles.textPrice}>141.800 đ</Text>
            <Text style={styles.textPriceDiscount}>141.800 đ</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={styles.groupPrice}>
                <TouchableOpacity style={styles.btnSub}>
                  <Text style={styles.textBtn}>-</Text>
                </TouchableOpacity>
                <Text style={styles.textQuantity}>1</Text>
                <TouchableOpacity style={styles.btnSub}>
                  <Text style={styles.textBtn}>+</Text>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  color: "#134FEC",
                  fontWeight: "700",
                  paddingRight: 12,
                }}
              >
                Mua sau
              </Text>
            </View>
          </View>
        </View>
        <View style={{ padding: 12, flexDirection: "row", paddingTop: 21 }}>
          <Text style={{ fontWeight: "700" }}>Mã giảm giá đã lưu</Text>
          <Text style={{ fontWeight: "700", color: "#134FEC", marginLeft: 17 }}>
            Xem tại đây
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
          }}
        >
          <View style={styles.btnDiscount}>
            <TouchableOpacity
              style={{ width: 32, height: 16, backgroundColor: "#F2DD1B" }}
            ></TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>Mã giảm giá</Text>
          </View>
          <CustomButton
            textColor="white"
            style={{ width: 99, height: 45, backgroundColor: "#0A5EB7" }}
          >
            Áp dụng
          </CustomButton>
        </View>
      </View>
      <View style={styles.box1}>
        <Text style={{ fontWeight: "700" }}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text style={{ marginLeft: 5, fontWeight: "700", color: "#134FEC" }}>
          Nhập tại đây?
        </Text>
      </View>
      <View style={styles.box2}>
        <Text style={{ fontSize: 18, fontWeight: "700" }}>Tạm tính?</Text>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "red" }}>
          141.800 đ
        </Text>
      </View>
      <View style={styles.box3}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "#808080" }}>
            Thành tiền
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "700", color: "red" }}>
            141.800 đ
          </Text>
        </View>
        <CustomButton textColor="white" style={{ backgroundColor: "red" }}>
          TIẾN HÀNH ĐẶT HÀNG
        </CustomButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C4C4C4",
  },
  wrapper: {
    flex: 5,
    backgroundColor: "#FFFFFF",
  },

  heading: {
    paddingTop: 14,
    flexDirection: "row",
    width: "100%",
    paddingLeft: 12,
    paddingRight: 12,
  },
  imgHeading: {
    flex: 1,
  },
  detailHeading: {
    flex: 2,
    paddingLeft: 25,
    justifyContent: "space-between",
    height: 127,
  },
  textTitle: {
    fontWeight: "700",
    lineHeight: 14,
    fontSize: 12,
    fontStyle: "normal",
  },
  textPrice: {
    color: "#EE0D0D",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 18,
    lineHeight: 21,
  },
  textPriceDiscount: {
    color: "#808080",
    textDecorationLine: "line-through",
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 14,
    fontStyle: "normal",
  },
  groupPrice: {
    flexDirection: "row",
  },
  btnSub: {
    width: 15,
    height: 16,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
  },
  textBtn: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  textQuantity: {
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

    // width: 15,
    // height: 16,
    paddingLeft: 15,
    paddingRight: 15,
  },
  btnDiscount: {
    width: 208,
    height: 45,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#808080",
  },
  box1: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    marginTop: 14,
    paddingLeft: 12,
    alignItems: "center",
  },
  box2: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 18,
    marginTop: 14,
    paddingEnd: 18,
  },
  box3: {
    flex: 2,
    backgroundColor: "white",
    paddingLeft: 20,
    marginTop: 109,
    paddingRight: 20,
    justifyContent: "space-around",
  },
});
export default Detail;
