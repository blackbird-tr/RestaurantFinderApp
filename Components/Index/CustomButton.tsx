import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

type Prop={
    name:string,
    isActive:boolean
}

export default function CustomButton({name,isActive}:Prop) {
  return (
    <View >
        {isActive?(<View style={styles.quickActive}>
                 <Text style={styles.textActive}>{name}</Text>
             </View> ):
        (<View style={styles.quick}>
            <Text style={styles.text}>{name}</Text>
        </View> )}

     
    </View>
  )
}
const styles = StyleSheet.create({
    
    quickActive:{
        marginRight:22, 
        borderRadius:12, 
        padding:12,
        backgroundColor:'#f08811',   
        textAlign:'center',
        alignItems:"center",
        fontFamily:'lucida grande' 
    }, 
    quick:{
        marginRight:22, 
        padding:12,
        textAlign:'center',
        alignItems:"center", 
        borderRadius:12, 
        borderColor:'#918f89'



    }, 
    textActive:{ 
        textAlign:'center',
        alignItems:"center",
        fontStyle:'italic',
        fontWeight:'bold',
        color:'white'
    }, 
    text:{  
        textAlign:'center',
        alignItems:"center",
        
        fontStyle:'italic',
        fontWeight:'bold' ,
        color:'#918f89'


    }}

)