import { View, Text,StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react' 
import BigItemInfo from './BigItemInfo';
import { router } from 'expo-router';

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
export default function BigItem({ restaurant }:Props) {

  const onPressed = () => {
    const closed= restaurant.is_closed?(1):(0)
    router.push({
      pathname: "/detail",
      params: {
        name: restaurant.name,
        url: restaurant.url,
        image_url: restaurant.image_url, 
        phone: restaurant.phone,
        rating: restaurant.rating,
        reviewCount: restaurant.review_count,
        is_closed: closed,
        price: restaurant.price,
        address1: restaurant.location.address1,
        address2: restaurant.location.address2,
        address3: restaurant.location.address3,
        city: restaurant.location.city,
        zip_code: restaurant.location.zip_code,
        country: restaurant.location.country,
        state: restaurant.location.state,
      },
    });
  };
  return (
    <TouchableOpacity onPress={onPressed}>
    <ImageBackground
      source={{ uri: restaurant.image_url.toString() }}
      style={styles.itemContainer}
      imageStyle={styles.imageStyle}
    >
      

      <BigItemInfo 
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
    height: 180,
    width: 260,
    borderRadius: 30,
    overflow: "hidden",
    marginRight: 12,
    justifyContent: "flex-end", 
  },
  imageStyle: {
    borderRadius: 30,
  },
});