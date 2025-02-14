import { View, Text,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import ItemInfo from './ItemInfo';

interface IData {
  name: string;
  image_url: string;
  rating: number;
  price: string;
  is_closed: boolean;
  phone: string;
  review_count: number;
  url: string;
  location: Location;
}

type Location = {
  address1: string;
  address2: string;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
};
type Props={
  restaurant:IData;

}
export default function Item({ restaurant }:Props) {
  return (
    <TouchableOpacity>
    <ImageBackground
      source={{ uri: restaurant.image_url.toString() }}
      style={styles.itemContainer}
      imageStyle={styles.imageStyle}
    >
      

      <ItemInfo 
        restaurantName={restaurant.name}
        restaurantRate={restaurant.rating}
        restaurantReviewCount={restaurant.review_count}
      />
      
      
    </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 140,
    width: 180,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 12,
    justifyContent: "flex-end", 
  },
  imageStyle: {
    borderRadius: 30,
  },
});