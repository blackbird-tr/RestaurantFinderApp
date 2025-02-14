import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { Entypo, Ionicons } from '@expo/vector-icons'

export default function HeaderDetail() {
  return (
       <View style={styles.headerView}>
            <View style={styles.backView}>
              <TouchableOpacity>
                <Ionicons name="arrow-back" size={24} color="#706a69" />
              </TouchableOpacity>
            </View>
            <Text style={styles.resText}>Restaurant Profile</Text>
            <TouchableOpacity>
              <Entypo
                style={styles.resText}
                name="dots-three-horizontal"
                size={24}
                color="#706a69"
              />
            </TouchableOpacity>
          </View>
  )
}
const styles = StyleSheet.create({
  headerView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 44,
    marginLeft: 20,
  },
  backView: {},
  resText: {
    marginLeft: 100,
    color: "#706a69",
    fontStyle:'italic',
    fontWeight:'500'
  },
});
