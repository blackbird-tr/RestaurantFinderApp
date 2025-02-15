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
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import SearchBar from "@/Components/Search/SearchBar";
import Header from "@/Components/Index/Header";
import CustomButton from "./CustomButton";
import ItemInfo from "./Item/ItemInfo";
import ListItems from "./Item/ListItems";
import ListBigItems from "./BigItem/ListBigItems";
import { Api } from "@/api/api";
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
    data:IData[];
  }
export default function Card({data}:Props) {
  const [mdata, setmdata] = useState<IData[]>([])
  useEffect(() => {
    const fetchData = async () => {
      await PopularRestaurant();
    };
    fetchData();
  }, []);

  const PopularRestaurant = async () => {
    Api({ onSet: setmdata });  // setmdata'yı doğru şekilde 'onSet' olarak geçiyoruz
  };
  return (
    <View style={styles.cardView}>
       
      <View style={styles.quickbuttons}>
        <CustomButton isActive={true} name="Recomend" />
        <CustomButton isActive={false} name="Pizza" />
        <CustomButton isActive={false} name="Burger" />
        <CustomButton isActive={false} name="Sushi" />
      </View>

       
      <View style={styles.listContainer}>
        <ListItems restaurants={data} />
      </View>

       
      <Text style={styles.popularText}>Popular Restaurants</Text>

      <View style={styles.listContainer}>
        <ListBigItems restaurants={mdata} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    height: 500,
    width: "100%",
    justifyContent: "flex-start",  
    padding: 10,  
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  quickbuttons: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap", 
    marginLeft: 10, 
    
    marginTop: 12, 
    marginBottom: 20,  
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
    color:' rgba(0, 0, 0, 0.62)'
  },
});

