import { View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Card from "./Card";

type Props = {
  Isvisible: boolean;
  setVisible: (bool: boolean) => void;
};

export default function MyDrawer({ Isvisible, setVisible }: Props) {
  if (!Isvisible) return null;

  return (
    <View style={styles.overlay}> 
      <TouchableOpacity
        style={styles.backdrop}
        onPress={() => setVisible(false)}
        activeOpacity={1}  
      />
 
      <View style={styles.drawer}> 
        <TouchableOpacity
          onPress={() => setVisible(false)}
          style={styles.closeButton}
        >
          <Ionicons name="arrow-back" size={34} color="#21b55e" />
        </TouchableOpacity>
      </View>

        <Card/>


    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // %50 siyah gölge
  },
  drawer: {
    backgroundColor: "white",
    width: 300,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  closeButton: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 40,
    marginRight: 25,
  },
});
