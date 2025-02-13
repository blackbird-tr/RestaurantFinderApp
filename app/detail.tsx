import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function detail() {
  const {
    name,
    image,
    isclosed,
    phone,
    url,
    adress1,
    adress2,
    zip,
    country,
    city,
  } = useLocalSearchParams();
  console.log(isclosed)
  const openLink = () => {
    Linking.openURL(`${url}`).catch((err) =>
      console.error("Failed to open URL:", err)
    );
  };
  const openCall = () => {
    Linking.openURL(`tel:${phone}`);
  };
  return (
    <View style={styles.mainView}>
      <Image style={styles.photo} src={image.toString()} />
      <Text style={styles.textName}>{name.toString()}</Text>

      <View style={styles.AdressView}>
        <Entypo style={{ marginRight: 7 }} name="map" size={24} color="black" />
        <Text>
          {adress1.toString() +
            "/" +
            adress2.toString() +
            "/" +
            zip.toString() +
            "/" +
            city.toString() +
            "/" +
            country.toString()}
        </Text>
      </View>

      <View style={styles.closeView}>
        {isclosed === "1"? (
          <>
            <Ionicons name="lock-closed" size={24} color="black" />
            <Text style={{ fontWeight: "300" }}>It's Closed</Text>
          </>
        ) : (
          <>
            <FontAwesome5 name="lock-open" size={24} color="black" />
            <Text>It's Open</Text>
          </>
        )}
      </View>

      <TouchableOpacity style={styles.URLView} onPress={openLink}>
        <Entypo
          style={{ marginRight: 7 }}
          name="link"
          size={24}
          color="black"
        />
        <Text style={{ color: "blue", textDecorationLine: "underline" }}>
          From more information click
          <MaterialIcons
            style={{ textDecorationLine: "none" }}
            name="ads-click"
            size={14}
            color="black"
          />
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.TelView} onPress={openCall}>
        <Feather
          style={{ marginRight: 7 }}
          name="phone-call"
          size={24}
          color="black"
        />
        <Text>{phone}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    flexDirection: "column",
    alignItems: "center",
  },
  closeView: {
    flexDirection: "row",
    alignItems: "center",

    marginTop: 40,
  },
  AdressView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    margin: 15,
  },
  TelView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    padding: 2,
    width: 160,
    borderRadius: 20,
    marginTop: 20,
  },
  URLView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 2,
    padding: 2,
    width: 250,
    borderRadius: 20,
    marginTop: 20,
  },
  photo: {
    height: 360,
    width: 360,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 12,
  },
  textName: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Arial",
    fontStyle: "italic",
    fontWeight: "bold",
    marginTop: 15,
  },
});
