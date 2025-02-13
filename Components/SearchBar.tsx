import {StyleSheet, View, Text, TextInput, TextInputChangeEventData, NativeSyntheticEvent } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'; 

type Props={
handleChange:(e:NativeSyntheticEvent<TextInputChangeEventData>)=>void
}
export default function SearchBar({handleChange}:Props) {
    
     

  return (
    <View style={styles.view}>
      <AntDesign style={styles.icon} name="search1" size={24} color="black" /> 
      <TextInput style={styles.text}
          placeholder="Ara"
          autoCapitalize='none'
          autoCorrect={false}
          onChange={handleChange}
        />
    </View>
  )
}

const styles=StyleSheet.create({
    icon:{
        marginStart:12,
        marginRight:12
    },
    text: { 
   flex:1
    },
    
    view:{
        marginTop:12,
        display:'flex',
        flexDirection:'row', 
        alignItems:'center',
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        width:360,
        height:60,
        backgroundColor:'gray',
        color:'white'

    }
})