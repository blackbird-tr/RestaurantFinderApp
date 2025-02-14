import Search from "@/Components/Search/MainSearch";  
import axios from "axios";
import { useEffect, useState } from "react";
import {KeyboardAvoidingView, NativeSyntheticEvent, Platform, ScrollView, StyleSheet, Text, TextInputChangeEventData, TouchableOpacity, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";  
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import SearchBar from "@/Components/Search/SearchBar"; 
export default function Header() {
  return (
     
       <View style={{flexDirection:'row'}}>
    <TouchableOpacity style={styles.menu}>
    <SimpleLineIcons  name="menu" size={24} color="#80e08a" />
    </TouchableOpacity>
    
    <TouchableOpacity style={styles.ring}>
    <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#80e08a" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.user}>
    <EvilIcons name="user" size={44} color="#80e08a" />
    </TouchableOpacity>
   
    </View> 
  )
}
const styles=StyleSheet.create({
   
  
  menu:{ 
    marginTop:50,
    marginLeft:20,
    flex:4,
  },
  ring:{ 
    marginTop:50, 
    flex:1,
    alignItems:'flex-end'
  },
  user:{ 
    marginTop:48,
    marginRight:20,
    flex:1,
    alignItems:'flex-end'
  }
})