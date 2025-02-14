import Search from "@/Components/Search/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import {
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
import Card from "@/Components/Index/Card";
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
export default function Index() {
  const [Data, setData] = useState<IData[]>([]);

  const takeAllData = (searchResult: IData[]) => {
    setData(searchResult);
  };
  const Search = (value: string) => {
    console.log(value);
  };
  const FilterByResult = (price: string) => {
    return Data.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // iOS için padding, Android için height
      style={styles.mainView}
    >
      <Header />
      <View>
        <FontAwesome style={styles.plus} name="plus" size={120} />
        <View>
          <SearchBar setSearch={Search} />
        </View>
        <FontAwesome style={styles.plus2} name="plus" size={120} />
      </View>

      <Card/>
      
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    backgroundColor: "#21b55e",
  },
  cardView: {
    backgroundColor: "white",
    height: 450,
    width: "100%",
    justifyContent: "center",
    borderStartStartRadius: 40,
    borderEndStartRadius: 40,
  },
  plus: {
    color: "#80e08a",
    transform: [{ rotate: "193deg" }],
  },
  plus2: {
    display: "flex",
    flexDirection: "row",
    color: "#80e08a",
    transform: [{ rotate: "3deg" }],
  },
  menu: {
    marginTop: 50,
    marginLeft: 20,
    flex: 4,
  },
  ring: {
    marginTop: 50,
    flex: 1,
    alignItems: "flex-end",
  },
  user: {
    marginTop: 48,
    marginRight: 20,
    flex: 1,
    alignItems: "flex-end",
  },
});
