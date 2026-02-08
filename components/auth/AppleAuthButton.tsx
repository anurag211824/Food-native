import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function AppleAuthButton() {
  return (
    <TouchableOpacity style={styles.appleButton}>
      <Ionicons size={20} name="logo-apple" color="#fff" />

      <Text style={styles.appleButtText}>Continue with Apple</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  appleButton: {
    backgroundColor: "#000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 17,
    borderRadius: 12,
    gap: 4,
  },
  appleButtText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
