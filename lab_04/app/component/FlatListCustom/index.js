import { FlatList, StyleSheet, Text, View } from "react-native";
import flatListData from "../../fakeData";
import ItemFlatlist from "../ItemFlatlist";

function FatListCustom() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
      </Text>
      <FlatList
        data={flatListData}
        renderItem={(item) => <ItemFlatlist item={item.item}></ItemFlatlist>}
      ></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  text: {
    padding: 30,
  },
});
export default FatListCustom;
