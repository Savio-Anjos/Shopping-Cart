import { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CartContext } from "./../../contexts/CardContext";

import CardItem from "../../Components/CardItem";

export default function Cart() {
  const { cart, addItemCart } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <CardItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
});
