import Search from "@/Components/Search/MainSearch";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
  View,
} from "react-native";
import { Api } from "@/api/api";
import { Entypo, Ionicons } from "@expo/vector-icons";

type Props = {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  price: string;
  is_closed: string;
};
export default function CardDetail({
  address1,
  address2,
  address3,
  city,
  zip_code,
  country,
  state,
  price,
  is_closed,
}: Props) {
  const [first, setfirst] = useState(false);
  return (
    <View style={styles.cardView}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 110,
          left: 10,
        }}
      >
        <Text
          style={{
            marginStart: 12,
            marginEnd: 22,
            fontStyle: "italic",
            fontWeight: "500",
            color: "rgba(111, 98, 98, 0.78)",
          }}
        >
          Is the restaurant open or closed? =={">"}
        </Text>
        <TouchableOpacity
          onPress={() =>
            alert("Number of '₺' descirbe how expensive is restaurant")
          }
        > 
          <Text
            style={{
              marginStart: 5,
              marginEnd: 22,
              fontStyle: "italic",
              fontWeight: "500",
              fontSize: 22,
              color: "#21b55e",
            }}
          >
            {price || '₺'} 

          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 255,
          left: 10,
        }}
      >
        <Text
          style={{
            marginStart: 12,
            marginEnd: 22,
            fontStyle: "italic",
            fontWeight: "500",
            color: "rgba(111, 98, 98, 0.78)",
          }}
        >
          Is the restaurant open or closed? =={">"}
        </Text>

        {Number(is_closed)===0 ? (
          <TouchableOpacity onPress={() => alert("It's Open")}>
            <Ionicons name="lock-open-outline" size={24} color="#21b55e" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => alert("It's Closed")}>
            <Ionicons name="lock-closed-outline" size={24} color="#21b55e" />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          bottom: 180,
          left: 20,
        }}
      >
        <Entypo name="map" size={24} color="#21b55e" />
        <Text
          style={{
            marginStart: 12,
            fontStyle: "italic",
            fontWeight: "500",
            color: "rgba(111, 98, 98, 0.78)",
            flexWrap: "wrap", // Metnin taşmasını engeller ve alt satıra geçmesini sağlar
            width: "100%", // Genişliği %100 yaparak alanı en iyi şekilde kullanmasını sağlarız
          }}
        >
          {address1 +
            "/" +
            address2 +
            "/" +
            address3 +
            "/" +
            city +
            "/" +
            country +
            "/" +
            zip_code +
            "/" +
            state}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "rgba(76, 75, 79, 0.17)",
    height: 450,
    width: "100%",
    padding: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  quickbuttons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
    flexShrink: 1,
  },
  listContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
  popularText: {
    fontWeight: "700",
    fontSize: 18,
    margin: 10,
    color: " rgba(0, 0, 0, 0.62)",
  },
});
