import Search from "@/Components/Search";
import SearchBar from "@/Components/SearchBar";
import ShowItems from "@/Components/ShowItems";
import axios from "axios";
import { useEffect, useState } from "react";
import {NativeSyntheticEvent, ScrollView, StyleSheet, Text, TextInputChangeEventData, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";  
interface IData{
  name:string,
  image_url:string, 
  rating :number,
  price:string,
  is_closed:boolean,
  phone:string, 
  review_count:number,
  url:string,
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
export default function Index() {
   const [Data, setData] = useState<IData[]>([]);

   const takeAllData=(searchResult:IData[])=>{
 setData(searchResult) 

   }

   const FilterByResult=(price:string)=>{
       return Data.filter((result)=>{
         return result.price ===price
       })
     }
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
    >  
    <View style={{alignItems:"center"}}> 
     <Search onSearch={takeAllData}/> 
      <View style={{ height: 50 }} />  
     <ShowItems  title="Ucuz" data={FilterByResult('₺')}/>
     <ShowItems title="Orta" data={FilterByResult('₺₺')}/>
     <ShowItems title="Pahalı" data={FilterByResult('₺₺₺')}/>
     </View>
    </ScrollView>
  );
}
const styles=StyleSheet.create({
   
})