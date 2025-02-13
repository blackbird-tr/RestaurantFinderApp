import { View, Text,StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react'
import { Link } from 'expo-router';
import { linkTo } from 'expo-router/build/global-state/routing';
import { router } from 'expo-router';

 
interface IData{
    name:string,
    image_url:string, 
    rating :number,
    price:string,
    is_closed:boolean,
    phone:string, 
    review_count:number,
    url:string
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
    type Props={ 
      data:IData 
    }
export default function RestaurantCard({data}:Props) {
   function go() { 
    var isClo=data.is_closed ? "1":"0";
    router.push({ pathname: "/detail",  params: { name: data.name, 
      image:data.image_url
      ,isclosed:isClo
      ,phone:data.phone ,
      url:data.url,
      adress1:data.location.address1,
      adress2:data.location.address2,
      city:data.location.city,
      country:data.location.country,
      zip:data.location.zip_code,
      state:data.location.state
    } });
  }
  return (
    <TouchableOpacity style={styles.CardView} onPress={go}>
      <Image style={styles.image} src={data.image_url}/>
      <Text style={styles.Mtext} >{data.name}</Text>
       <View style={{ flexDirection: "row", justifyContent:'center', alignItems: "center" }}>
           <Text style={styles.Ptext}>{data.rating}</Text>
           <MaterialIcons name="star-rate" size={24} color="yellow" />
        </View> 
       <View style={{ flexDirection: "row", justifyContent:'center', alignItems: "center" }}>
           <Text style={styles.Ptext}>{data.review_count} </Text>
            <FontAwesome name="comment" size={24} color="white" />
        </View> 
    </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    image:{ 
    margin:5,
    borderRadius:20,   
    height:150, 
   },
   Mtext:{  
    margin:6,    
    textAlign:'center',
    textDecorationStyle:'solid',
    fontWeight:'bold'
    
   },Ptext:{  
    margin:6,     
    textAlign:'center', 
    fontFamily:'Cochin',
    fontStyle:'italic'
    
   },
    CardView:{
     backgroundColor:'#7a7d7b',
     borderWidth:1,
     borderColor:'#888c89',
     borderRadius:25,
     width:200,
     margin:6,
     height:280
    }})