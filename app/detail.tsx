import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import HeaderDetail from "@/Components/Detail/HeaderDetail";
import { Image } from "react-native";
import Card from "@/Components/Detail/CardDetail";
import CardDetail from "@/Components/Detail/CardDetail";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Star from "@/Components/Index/Star";
import { Ionicons } from "@expo/vector-icons";
import MyCard from "@/Components/Detail/MyCard";

export default function Detail() {
  const {
    name,
    url,
    phone,
    rating,
    reviewCount,
    is_closed,
    price,
    address1,
    address2,
    image_url,
    address3,
    city,
    zip_code,
    country,
    state,
  } = useLocalSearchParams();
 
  const safeString = (value: any) => value ?? '';  
  const safeNumber = (value: any) => (value != null ? Number(value) : 0);  
  return (
    <View style={{ backgroundColor: "white" }}>
      <HeaderDetail />

      <View style={styles.imageView}>
        <Image source={require("../assets/images/arkalogom.png")} style={{}} />
      </View>

      <MyCard
        name={safeString(name)}   
        image_url={safeString(image_url)}   
        phone={safeNumber(phone)}  
        rateCount={safeNumber(reviewCount)}   
        star={safeNumber(rating)}   
        url={safeString(url)}  
      />
      <CardDetail
        address1={safeString(address1)}  
        address2={safeString(address2)}   
        address3={safeString(address3)}   
        city={safeString(city)}   
        zip_code={safeString(zip_code)}   
        country={safeString(country)}  
        state={safeString(state)}   
        price={safeString(price)}   
        is_closed={safeString(is_closed)}   
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    marginRight: 1,
    flexDirection: "row",
    justifyContent: "center",
    height: 400,
  },
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
