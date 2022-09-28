import { FlatList, StyleSheet, View } from "react-native";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import FatListCustom from "../../component/FlatListCustom";

function Home() {
  return (
    <View style={styles.wrapper}>
      <Header></Header>
      <FatListCustom></FatListCustom>
      <Footer></Footer>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
export default Home;
