import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Star from "@/Components/Index/Star";
import Ionicons from "@expo/vector-icons/Ionicons";
type Props = {
  restaurantName: string;
  restaurantRate: number;
  restaurantReviewCount: number;
};

export default function BigItemInfo({
  restaurantName,
  restaurantRate,
  restaurantReviewCount,
}: Props) {
  return (
    <View style={styles.mainView}>
      <Ionicons
        style={{ marginRight: 12 }}
        name="restaurant"
        size={24}
        color="#21b55e"
      />
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.Text}>{restaurantName}</Text>
        <View>
          <Star starNo={restaurantRate} />
          <Text
            style={{
              fontWeight: "600",
              fontStyle: "italic",
              color: "rgba(35, 35, 43, 0.5)",
            }}
          >
            ({restaurantReviewCount}) reviewCount
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    color: "rgba(35, 35, 43, 0.5)",
    fontWeight: "800",
  },
  mainView: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    paddingTop: 4,
    paddingLeft: 12,
    width: "100%",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: "rgb(245, 247, 239)",
  },
});
