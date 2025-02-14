 
import axios from "axios";
import { useEffect, useState } from "react";
import {NativeSyntheticEvent, StyleSheet, Text, TextInputChangeEventData, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";  
import SearchBar from "./SearchBar";
 
interface SearchProps {
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function MainSearch({onSearch}:SearchProps) {
    
  return (
    <View  > 
    <SearchBar setSearch={onSearch}/>
    </View>
  );
}
const styles=StyleSheet.create({
   
})