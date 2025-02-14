import React from "react";
import { View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type Prop = {
  starNo: number;
};

export default function Star({ starNo }: Prop) { 
  const fullStars = Math.floor(starNo);  
  const halfStar = starNo % 1 !== 0;  
  const emptyStars = 5 - Math.ceil(starNo);  

  return (
    <View style={{ flexDirection: "row" }}> 
      {Array.from({ length: fullStars }, (_, i) => (
        <FontAwesome key={`full-${i}`} name="star" size={17} color="yellow" />
      ))}
 
      {halfStar && (
        <FontAwesome key="half" name="star-half" size={17} color="yellow" />
      )}
 
      {Array.from({ length: emptyStars }, (_, i) => (
        <FontAwesome key={`empty-${i}`} name="star" size={17} color="white" />
      ))}
    </View>
  );
}
