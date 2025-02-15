import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import React from "react";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
const CV_URL =
  "https://drive.google.com/uc?export=download&id=1Z7IlpPZKeZfL7QZdNQYUO9eH0sn1VZeD";
export default function Card() {
  const openGitHub = () => {
    Linking.openURL("https://github.com/blackbird-tr");
  };

  const openLinkedIn = () => {
    Linking.openURL("https://www.linkedin.com/in/evren-blackbird-0a4601264");
  };
  const callMe = () => {
    Linking.openURL(`tel:${"05357358138"}`);
  };
  const downloadCV = async () => {
    try {
      // Dosyanın indirileceği yol
      const fileUri = FileSystem.documentDirectory + "EvrenKarakus_CV.pdf";

      const { uri } = await FileSystem.downloadAsync(CV_URL, fileUri);

      Alert.alert(
        "Download Complete",
        "CV successfully downloaded to your device."
      );
    } catch (error) {
      Alert.alert("Error", "Failed to download the CV.");
    }
  };
  return (
    <>
      <TouchableOpacity style={styles.mainView} onPress={downloadCV}>
        <Text style={styles.title}>Who I Am</Text>

        <View style={styles.infoContainer}>
          <FontAwesome name="user" size={20} color="#21b55e" />
          <Text style={styles.infoText}>Evren Karakuş</Text>
        </View>

        <View style={styles.infoContainer}>
          <MaterialIcons name="work" size={20} color="#21b55e" />
          <Text style={styles.infoText}>Software Developer</Text>
        </View>

        <View style={styles.infoContainer}>
          <FontAwesome name="calendar" size={20} color="#21b55e" />
          <Text style={styles.infoText}>22 years old</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sView} onPress={openGitHub}>
        <FontAwesome
          style={{ alignSelf: "center", marginTop: 12 }}
          name="github"
          size={40}
          color="black"
        />
        <Text style={styles.linkText}>GitHub Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.sView, styles.linkedin]}
        onPress={openLinkedIn}
      >
        <FontAwesome
          style={styles.icon}
          name="linkedin-square"
          size={40}
          color="white"
        />
        <Text style={styles.linkText}>LinkedIn Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.sView]} onPress={callMe}>
        <MaterialIcons
          style={styles.icon}
          name="phone-callback"
          size={30}
          color="black"
        />

        <Text style={styles.callText}>Call Me</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  mainView: {
    marginTop: 140,
    marginLeft: 20,
    backgroundColor: "rgba(157, 143, 143, 0.56)",
    height: 120,
    width: 240,
    borderRadius: 12,
  },
  sView: {
    marginTop: 40,
    marginLeft: 20,
    backgroundColor: "rgba(157, 143, 143, 0.56)",
    height: 120,
    width: 240,
    borderRadius: 12,
  },
  title: {
    alignSelf: "center",
    fontWeight: "700",
    fontStyle: "italic",
    fontSize: 18,
    color: "white",
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginStart: 8,
  },
  infoText: {
    fontSize: 15,
    fontStyle: "italic",
    fontWeight: "600",
    color: "rgba(61, 57, 57, 0.75)",
    marginLeft: 10,
  },
  linkText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
  },
  callText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 20,
  },
  linkedin: {
    backgroundColor: "#0077B5", // LinkedIn rengi
  },
  icon: {
    marginTop: 15,
    alignSelf: "center",
    marginRight: 10,
  },
});
