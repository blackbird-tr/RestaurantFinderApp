import Search from "@/Components/Search/Search";
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
export default function Card() {
  return (
    <View style={styles.cardView}>
      <View style={styles.quickbuttons}>

        <TouchableOpacity style={styles.quickActive}>
             Recomend 
        </TouchableOpacity>
        <TouchableOpacity style={styles.quick}>
            <Text>Pizza</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.quick}>
            <Text>Burger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.quick}>
            <Text>Sushi</Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    quickbuttons:{
        display:'flex',
        flexDirection:'row', 
        
    },
    quickActive:{
        marginRight:12,
        flex:1,
        borderRadius:12, 
        backgroundColor:'#f08811',   
        textAlign:'center',
        alignItems:"center"


    }, 
    quick:{
        marginRight:12,
        flex:1, 
        textAlign:'center',
        alignItems:"center"


    },
  cardView: {
    backgroundColor: "white",
    height: 450,
    width: "100%",
    justifyContent: "center",
    borderStartStartRadius: 40,
    borderEndStartRadius: 40,
  },
});
