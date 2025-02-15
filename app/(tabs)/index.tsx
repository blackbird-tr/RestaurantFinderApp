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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "@/Components/Index/Header";
import Card from "@/Components/Index/Card";
import MainSearch from "@/Components/Search/MainSearch";
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

  const Search = (data: IData[]) => {
    setData(data);
  };
  return (
    <ScrollView
    keyboardShouldPersistTaps="handled"
    keyboardDismissMode="on-drag"
    contentContainerStyle={{ flexGrow: 1 }}
  >
    <View style={styles.mainView}>
      <Header />
      <FontAwesome style={styles.plus} name="plus" size={90} />
      <View style={{ marginStart: 40, marginBottom: 20 }}>
        <Text
          style={{
            fontWeight: "400",
            fontStyle: "italic",
            color: "white",
          }}
        >
          WHERE DO YOU WANT TO EAT TODAY ?
        </Text>
      </View>
      <MainSearch onSearch={Search} />
      <FontAwesome style={styles.plus2} name="plus" size={90} />
      <Card data={Data} />
    </View>
  </ScrollView>
  
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
