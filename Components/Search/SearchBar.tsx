import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputChangeEventData,
  NativeSyntheticEvent,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
interface props {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchBar({ setSearch }: props) {
  
  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setSearch(e.nativeEvent.text);
  };

  return (
    <View style={styles.mainView}>
      <AntDesign style={{marginLeft:5}} name="search1" size={24} color="#918f89" />
      <TextInput onChange={handleChange} placeholder="Search" />
    </View>
  );
}
const styles = StyleSheet.create({
  mainView: {
    display: "flex",
    flexDirection: "row",
    alignItems:'center',
    marginStart: 40, 
    padding:7,
    borderRadius: 20,
    width: 240,
    backgroundColor: "white",
  },
});
