import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Star from "../Star";

type Props = {
  restaurantName: string;
  restaurantRate: number;
  restaurantReviewCount: number;
};

export default function ItemInfo({
  restaurantName,
  restaurantRate,
  restaurantReviewCount,
}: Props) {
  return (
    <View style={styles.mainView}>
      <Text style={styles.Text}>{restaurantName}</Text>
      <View>
      <Star starNo={restaurantRate} />
      <Text style={{fontWeight:'600', fontStyle:'italic',color:'rgba(255, 255, 255, 0.63);'}}>({restaurantReviewCount}) reviewCount</Text>
      </View>
      
      
    </View>
  );
}
const styles = StyleSheet.create({
  Text: {
    color: "white",
    fontWeight: "800",
  },
  mainView: {
    flexDirection: "column",
    height: 70,
    paddingTop:4,
    paddingLeft:12,
    width: '100%',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    backgroundColor: "rgba(51, 51, 67, 0.5)",
  },
});
