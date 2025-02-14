 
import axios from "axios";
import { useEffect, useState } from "react";
import {NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";  
import SearchBar from "./SearchBar";
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

type Location={
   address1 : string,
  address2: string,
  address3: string,
  city: string,
  zip_code: string,
  country: string,
  state: string,
  display_address : string[]
}
type SearchProps={
    onSearch:(data:IData[])=>void;
}
export default function MainSearch({onSearch}:SearchProps) {
  const [search, setSearch] = useState<string>("ekler");
  const [Data, setData] = useState<IData[]>([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.yelp.com/v3/businesses/search",
          {
            headers: {
              Authorization:
                "Bearer 3T5A-vT7WGRXzDJK00p_rIvJmIdtM3sqxiDEx6JUXPKhHmLwlgpv2R8a7szR4z9sCRl37_oyUyzBfBhzt-GJi-F_vJh6-L4tKJeCVgVip-kYlP-UWtmW_1OrUImvZ3Yx",
            },
            params: {
              term: search,
              location: "İstanbul",
              limit: 20,
            },
          }
        );

        const filteredData: IData[] = response.data.businesses.map(
          (business: any) => ({
            name: business.name,
            image_url: business.image_url,
            rating: business.rating,
            price:business.price,
            is_closed:business.is_closed,
            phone:business.phone,
            review_count: business.review_count,
            url:business.url,
            location:business.location
          })
        );
        setData(filteredData);
        onSearch(filteredData)
      } catch (error) {
        console.error("API Hatası:", error);
      }
    };

    if (search) {
      fetchData();
    }
  }, [,search]);
  
  
 
console.log(search)
  return (
    <View  > 
    <SearchBar setSearch={setSearch}/>
    </View>
  );
}
const styles=StyleSheet.create({
   
})