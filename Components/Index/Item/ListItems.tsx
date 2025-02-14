import { View, Text,StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'  
import Item from './Item'
interface IData{
    name:string,
    image_url:string, 
    rating :number,
    price:string,
    is_closed:boolean,
    phone:string, 
    review_count:number,
    url:string
    location:Location
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
  restaurants:IData[];

}

export default function ListItems({restaurants}:Props) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
  <View style={styles.rowContainer}>
    {restaurants.map((element, index) => {
      return <Item restaurant={element} key={index} />;
    })}
  </View>
</ScrollView>

  )
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",  
    paddingHorizontal: 10,  
    alignItems: "center" 
  },
});