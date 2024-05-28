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
          <Text style={styles.title}>Our Sunday Service </Text>
        </View>
        <View style={{ position: "relative" }}>
          <Text style={styles.description}>
            Experience the warmth of community and the embrace of spiritual
            growth at our Sunday service. Join us as we come together in
            fellowship to celebrate faith, love, and the boundless grace of our
            Creator.
          </Text>
          <Text style={styles.description}>
          From the uplifting melodies of worship to the enlightening
            messages of hope and inspiration, our service offers a sanctuary for
            hearts seeking solace and souls yearning for connection. Delve into
            the depths of scripture, engage in heartfelt prayer, and witness the
            transformative power of unity as we journey together towards a
            deeper understanding of divine purpose and a brighter vision for
            tomorrow. 
          </Text>
          <Text style={styles.description}>
          Whether you're a seasoned believer, a seeker on the path,
            or a curious soul exploring the mysteries of faith, you're invited
            to join us as we gather to honor the sacred rhythms of life and
            affirm the eternal promise of grace. Embrace the spirit of
            community, find solace in shared reverence, and discover the joy of
            belonging at our Sunday service.
          </Text>
        </View>
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
    marginBottom: 18,
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
