import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { church } from "../../../assets";
import { Colors } from "../../Utils/Colors";
import RecentReadings from "./RecentReadings";
import { useNavigation } from "@react-navigation/native";

export default function BibleStudy() {

  const navigation = useNavigation();
  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.header}>Today's Reading</Text>
        <Image source={church} style={styles.image} />
        <Text style={{ fontSize: 15, fontWeight: "700", fontFamily: "pop" }}>
          Daily Light On The Daily Path
        </Text>
        <Text style={styles.subText}>Matthews 15: 7 v 1</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 10,
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.header}>Recent Readings</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("all-readings")}}>
          <Text style={{ color: "#8a8a71", fontFamily: "crimsonBoldItalic" }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
      {/**RECENT BOOKINGS */}
      <RecentReadings />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontFamily: "pop",
  },
  image: {
    width: "100%",
    height: 300,
    marginVertical: 10,
  },
  subText: {
    fontSize: 15,
    fontFamily: "crimsonBoldItalic",
    color: Colors.SECONDARY_LIGHT,
  },
});
