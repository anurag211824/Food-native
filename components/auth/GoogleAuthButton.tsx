import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function GoogleAuthButton() {
  return (
    <TouchableOpacity style={styles.googleButton}>
      <Ionicons size={16} name="logo-google" color={"#fff"} />
      <Text style={styles.googleButtText}>Continue with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  googleButton: {
    backgroundColor: "#4285F4",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  googleButtText:{
  color:"#fff",
  fontSize:16,
  fontWeight:'600'
  }
});
