import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../Utils/Colors";

export default function Header() {
  return (
    <View style={{ backgroundColor: "#8a8a71", paddingVertical: 15 }}>
      <Text
        style={{
          textAlign: "center",
          color: Colors.WHITE,
          fontSize: 17,
          fontWeight: "700",
        }}
      >
        ELEVATION CHURCH
      </Text>
    </View>
  );
}
