import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { church } from "../../../assets";
import { Colors } from "../../Utils/Colors";

export default function Services() {
  return (
    <View style={{ marginTop: 20 }}>
      <View style={{ position: "relative" }}>
        <Image
          source={church}
          style={{ width: "100%", height: 300, borderRadius: 20 }}
        />
        <TouchableOpacity style={styles.watchBtn}>
          <Text style={{ color: "#8a8a71" }}>Stream Now</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.title}>Special Annointing Service </Text>
        </View>
        <View style={{ position: "relative" }}>
          <Text style={styles.description}>
            This upcoming service is not just an ordinary gathering; it's a
            sacred moment where we come together to seek blessings, healing, and
            guidance from a higher power. Anointing holds a rich history in
            various spiritual traditions, symbolizing the infusion of divine
            grace and empowerment.
          </Text>
        </View>
        <Text style={styles.date}>Date: 27/04/2024</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 23,
    fontFamily: "pop",
    color: "#8a8a71",
  },
  date: {
    fontSize: 15,
    fontWeight: "900",
    color: Colors.PRIMARY,
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: 22,
    fontFamily: "pop",
  },
  watchBtn: {
    position: "absolute",
    backgroundColor: Colors.WHITE,
    padding: 3,
    paddingHorizontal: 6,
    borderRadius: 99,
    top: 15,
    right: 15,
  },
});
