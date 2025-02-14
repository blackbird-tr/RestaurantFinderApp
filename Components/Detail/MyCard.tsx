import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import React from "react";
import Star from "../Index/Star";
import { Entypo, FontAwesome5, Ionicons } from "@expo/vector-icons";
type Props = {
  name: string;
  rateCount: number;
  star: number;
  url: string;
  phone: number;
  image_url: string;
};
export default function MyCard({
  name,
  rateCount,
  star,
  url,
  phone,
  image_url,
}: Props) {
  return (
    <View style={styles.CardView}>
      <View style={{ flexDirection: "column" }}>
        <Image
          src={image_url}
          style={{ height: 80, width: 80, borderRadius: 125 }}
        />
        <View
          style={{
            flexDirection: "row",
            gap: 12,
          }}
        >
          <View
            style={{
              backgroundColor: "rgba(63, 63, 63, 0.77)",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              height: 25,
              width: 75,
              marginTop: 10,
              flexDirection: "row",
            }}
          > 
            <Text
              style={{
                color: "rgb(213, 211, 211)",
                fontWeight: "400",
                fontStyle: "italic",
              }}
            >
              asd
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "column" }}>
        <Text
          style={{
            fontWeight: "700",
            fontStyle: "italic",
            color: "rgba(63, 63, 63, 0.7)",
            marginTop: 15,
            marginStart: 8,
          }}
        >
          {name}
        </Text>
        <View style={{ marginTop: 22, marginStart: 8, flexDirection: "row" }}>
          <Star starNo={star} />
          <Text
            style={{
              marginStart: 12,
              color: "rgba(63, 63, 63, 0.7)",
              fontWeight: "400",
              fontStyle: "italic",
            }}
          >
            ({rateCount}) review
          </Text>
        </View>
      </View>
      <View
        style={{ flexDirection: "row", flex: 1, justifyContent:'center'  }}
      >
        <TouchableOpacity onPress={()=>Linking.openURL(`${url}`)} style={{ alignItems: "center", marginBottom: 20 }}>
          <Entypo name="link" size={24} color="#21b55e" />
          <Text>Website</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Linking.openURL(`tel:${phone}`)}
          style={{ marginRight: 14,  marginBottom: 20 ,marginLeft:18, alignItems: "center" }}
        >
          <Ionicons name="call" size={24} color="#21b55e" />
          <Text>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  CardView: {
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "rgba(235, 235, 235, 0.88)",
    top: 400,
    left: 20,
    right: 20,
    borderRadius: 20,
    padding: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 150,
  },
});
