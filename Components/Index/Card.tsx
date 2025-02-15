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
type Props = {
  mySearch:string;
};
export default function Card({mySearch}:Props) {
  const [mdata, setmdata] = useState<IData[]>([]);
  const [data, setData] = useState<IData[]>([]);
  const [search, setSearch] = useState("");
  const [activeButton, setActiveButton] = useState<string>("Recomend");
  useEffect(() => {
    const fetchData = async () => {
      await PopularRestaurant();
      await SearchRestaurant();
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      if (mySearch) {
        await SearchRestaurant(mySearch);
      } else if (search) {
        await SearchRestaurant(search);
      }  
    };
  
    fetchData();
  }, [mySearch, search]);
  
  const SearchRestaurant = async (search?: string) => {
    Api({ onSet: setData, search:search });
  };
  const PopularRestaurant = async (search?: string) => {
    Api({ onSet: setmdata, search: "kebap"});
  };
  const handlePress = (buttonName: string) => {
    setSearch(buttonName);

    if (activeButton === buttonName) {
      setActiveButton("");
      setSearch("");
    } else {
      setActiveButton(buttonName);
    }
  };

  return (
    <View style={styles.cardView}>
      <View style={styles.quickbuttons}>
        <TouchableOpacity onPress={() => handlePress("Recomend")}>
          <CustomButton
            isActive={activeButton === "Recomend"}
            name="Recomend"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Pizza")}>
          <CustomButton isActive={activeButton === "Pizza"} name="Pizza" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Burger")}>
          <CustomButton isActive={activeButton === "Burger"} name="Burger" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress("Sushi")}>
          <CustomButton isActive={activeButton === "Sushi"} name="Sushi" />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <ListItems restaurants={data} />
      </View>

      <Text style={styles.popularText}>Popular Restaurant</Text>

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
    marginBottom:20,
    marginTop: 15,
    marginLeft: 10,
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
