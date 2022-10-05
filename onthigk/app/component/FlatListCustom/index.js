import { FlatList, View } from "react-native";
import FlatItem from "../FlatItem";

function FlatListCutom({ items, handleDelete }) {
  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <FlatItem
            handleDelete={handleDelete}
            item={item}
            index={index}
          ></FlatItem>
        )}
      ></FlatList>
    </View>
  );
}

export default FlatListCutom;
