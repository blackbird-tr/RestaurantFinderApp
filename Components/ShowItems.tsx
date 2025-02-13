import { StyleSheet,View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import RestaurantDetail from './RestaurantCard'

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

  type Props={
    title:string,
    data:IData[]
  }
export default function ShowItems({title,data}:Props) {

  
  console.log(data)

  return (
    <View style={styles.mainView}>
      <Text style={styles.TextU}>{title} Fiyatlı Restoranlar</Text>
      {data.length===0 && (
        <TouchableOpacity style={styles.CardView}>
       
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text 
            style={{
              fontSize: 24,         
              fontStyle: 'italic',   
              fontFamily: 'Arial',   
              color: '#333',         
              textAlign: 'center',    
            }}
          >
             Result Not Found
         </Text>
      </View>

        
        
    </TouchableOpacity>)}
    <FlatList style={styles.compView}  data={data} horizontal renderItem={({item})=>{
 
        return (
           <RestaurantDetail data={item}/>
      )
    }}  /> 
        
    </View>
  )
}
const styles=StyleSheet.create({
   mainView:{   
    display:'flex',
    height:350,
    flexDirection:'column', 
   },
   compView:{  
    margin:6,    
    height:300,
    
   },
    CardView:{
     backgroundColor:'#7a7d7b',
     borderWidth:1,
     borderColor:'#888c89',
     borderRadius:25,
     width:200,
     margin:6,
     height:280
     
 
   },
   TextU:{    
    textAlign:'center',
    textDecorationStyle:'solid',
    fontWeight:'bold'
   }
   ,
   TextO:{

   }
   ,
   TextP:{

   

}}
)